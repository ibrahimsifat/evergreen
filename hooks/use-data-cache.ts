"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// Cache entry interface
interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number; // Time to live in milliseconds
}

// Cache invalidation event
interface CacheInvalidationEvent {
  type: "invalidate";
  keys: string[];
}

// Global cache store
const cache = new Map<string, CacheEntry<any>>();

// Cache configuration
const DEFAULT_TTL = 5 * 60 * 1000; // 5 minutes
const CACHE_KEYS = {
  PROJECTS: "projects",
  SERVICES: "services",
  CLIENTS: "clients",
  PROJECT: (id: string) => `project-${id}`,
  SERVICE: (id: string) => `service-${id}`,
  CLIENT: (id: string) => `client-${id}`,
  STATS: "stats",
} as const;

// Custom hook for data caching
export function useDataCache<T>(
  key: string,
  fetcher: () => Promise<T>,
  options: {
    ttl?: number;
    enabled?: boolean;
    revalidateOnFocus?: boolean;
  } = {}
) {
  const {
    ttl = DEFAULT_TTL,
    enabled = true,
    revalidateOnFocus = true,
  } = options;

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(enabled);
  const [error, setError] = useState<Error | null>(null);
  const fetcherRef = useRef(fetcher);

  // Update fetcher ref when it changes
  useEffect(() => {
    fetcherRef.current = fetcher;
  }, [fetcher]);

  // Check if cache entry is valid
  const isCacheValid = useCallback((entry: CacheEntry<T>): boolean => {
    return Date.now() - entry.timestamp < entry.ttl;
  }, []);

  // Get data from cache or fetch
  const fetchData = useCallback(
    async (forceRefresh = false) => {
      if (!enabled) return;

      const cacheEntry = cache.get(key);

      // Use cache if valid and not forcing refresh
      if (!forceRefresh && cacheEntry && isCacheValid(cacheEntry)) {
        setData(cacheEntry.data);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const result = await fetcherRef.current();

        // Store in cache
        cache.set(key, {
          data: result,
          timestamp: Date.now(),
          ttl,
        });

        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Unknown error"));
      } finally {
        setLoading(false);
      }
    },
    [key, enabled, ttl, isCacheValid]
  );

  // Initial fetch
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Revalidate on window focus
  useEffect(() => {
    if (!revalidateOnFocus) return;

    const handleFocus = () => {
      fetchData();
    };

    window.addEventListener("focus", handleFocus);
    return () => window.removeEventListener("focus", handleFocus);
  }, [fetchData, revalidateOnFocus]);

  // Listen for cache invalidation events
  useEffect(() => {
    const handleInvalidation = (event: CustomEvent<CacheInvalidationEvent>) => {
      const { keys } = event.detail;
      if (keys.includes(key) || keys.includes("*")) {
        fetchData(true);
      }
    };

    window.addEventListener(
      "cache-invalidate",
      handleInvalidation as EventListener
    );
    return () =>
      window.removeEventListener(
        "cache-invalidate",
        handleInvalidation as EventListener
      );
  }, [key, fetchData]);

  return {
    data,
    loading,
    error,
    revalidate: () => fetchData(true),
    mutate: (newData: T) => {
      cache.set(key, {
        data: newData,
        timestamp: Date.now(),
        ttl,
      });
      setData(newData);
    },
  };
}

// Cache invalidation utilities
export const cacheUtils = {
  // Invalidate specific cache keys
  invalidate: (keys: string[]) => {
    keys.forEach((key) => cache.delete(key));

    // Dispatch invalidation event
    window.dispatchEvent(
      new CustomEvent("cache-invalidate", {
        detail: { type: "invalidate", keys },
      })
    );
  },

  // Invalidate all cache
  invalidateAll: () => {
    cache.clear();
    window.dispatchEvent(
      new CustomEvent("cache-invalidate", {
        detail: { type: "invalidate", keys: ["*"] },
      })
    );
  },

  // Invalidate by pattern
  invalidatePattern: (pattern: string) => {
    const keysToInvalidate: string[] = [];
    for (const key of cache.keys()) {
      if (key.includes(pattern)) {
        keysToInvalidate.push(key);
      }
    }
    cacheUtils.invalidate(keysToInvalidate);
  },

  // Get cache stats
  getStats: () => {
    const now = Date.now();
    let validEntries = 0;
    let expiredEntries = 0;

    for (const entry of cache.values()) {
      if (now - entry.timestamp < entry.ttl) {
        validEntries++;
      } else {
        expiredEntries++;
      }
    }

    return {
      total: cache.size,
      valid: validEntries,
      expired: expiredEntries,
    };
  },
};

// Predefined hooks for common data types
export const useProjects = (options?: { ttl?: number; enabled?: boolean }) => {
  return useDataCache(
    CACHE_KEYS.PROJECTS,
    async () => {
      const response = await fetch("/api/cms/projects");
      const data = await response.json();
      if (!data.success)
        throw new Error(data.message || "Failed to fetch projects");
      return data.data;
    },
    options
  );
};

export const useServices = (options?: { ttl?: number; enabled?: boolean }) => {
  return useDataCache(
    CACHE_KEYS.SERVICES,
    async () => {
      const response = await fetch("/api/cms/services");
      const data = await response.json();
      if (!data.success)
        throw new Error(data.message || "Failed to fetch services");
      return data.data;
    },
    options
  );
};

export const useClients = (options?: { ttl?: number; enabled?: boolean }) => {
  return useDataCache(
    CACHE_KEYS.CLIENTS,
    async () => {
      const response = await fetch("/api/cms/clients");
      const data = await response.json();
      if (!data.success)
        throw new Error(data.message || "Failed to fetch clients");
      return data.data;
    },
    options
  );
};

export const useProject = (
  id: string,
  options?: { ttl?: number; enabled?: boolean }
) => {
  return useDataCache(
    CACHE_KEYS.PROJECT(id),
    async () => {
      const response = await fetch(`/api/cms/projects/${id}`);
      const data = await response.json();
      if (!data.success)
        throw new Error(data.message || "Failed to fetch project");
      return data.data;
    },
    { ...options, enabled: options?.enabled !== false && !!id }
  );
};

export const useService = (
  id: string,
  options?: { ttl?: number; enabled?: boolean }
) => {
  return useDataCache(
    CACHE_KEYS.SERVICE(id),
    async () => {
      const response = await fetch(`/api/cms/services/${id}`);
      const data = await response.json();
      if (!data.success)
        throw new Error(data.message || "Failed to fetch service");
      return data.data;
    },
    { ...options, enabled: options?.enabled !== false && !!id }
  );
};

export const useClient = (
  id: string,
  options?: { ttl?: number; enabled?: boolean }
) => {
  return useDataCache(
    CACHE_KEYS.CLIENT(id),
    async () => {
      const response = await fetch(`/api/cms/clients/${id}`);
      const data = await response.json();
      if (!data.success)
        throw new Error(data.message || "Failed to fetch client");
      return data.data;
    },
    { ...options, enabled: options?.enabled !== false && !!id }
  );
};

export const useStats = (options?: { ttl?: number; enabled?: boolean }) => {
  return useDataCache(
    CACHE_KEYS.STATS,
    async () => {
      const [projectsRes, servicesRes, clientsRes] = await Promise.all([
        fetch("/api/cms/projects"),
        fetch("/api/cms/services"),
        fetch("/api/cms/clients"),
      ]);

      const [projectsData, servicesData, clientsData] = await Promise.all([
        projectsRes.json(),
        servicesRes.json(),
        clientsRes.json(),
      ]);

      return {
        projects: projectsData.success ? projectsData.data.length : 0,
        services: servicesData.success ? servicesData.data.length : 0,
        clients: clientsData.success ? clientsData.data.length : 0,
      };
    },
    options
  );
};

// Export cache keys for use in other files
export { CACHE_KEYS };
