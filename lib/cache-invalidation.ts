import { cacheUtils, CACHE_KEYS } from "@/hooks/use-data-cache";

// Cache invalidation patterns for different operations
export const cacheInvalidation = {
  // Project operations
  onProjectCreate: () => {
    cacheUtils.invalidate([CACHE_KEYS.PROJECTS, CACHE_KEYS.STATS]);
  },

  onProjectUpdate: (projectId: string) => {
    cacheUtils.invalidate([
      CACHE_KEYS.PROJECTS,
      CACHE_KEYS.PROJECT(projectId),
      CACHE_KEYS.STATS,
    ]);
  },

  onProjectDelete: (projectId: string) => {
    cacheUtils.invalidate([
      CACHE_KEYS.PROJECTS,
      CACHE_KEYS.PROJECT(projectId),
      CACHE_KEYS.STATS,
    ]);
  },

  // Service operations
  onServiceCreate: () => {
    cacheUtils.invalidate([CACHE_KEYS.SERVICES, CACHE_KEYS.STATS]);
  },

  onServiceUpdate: (serviceId: string) => {
    cacheUtils.invalidate([
      CACHE_KEYS.SERVICES,
      CACHE_KEYS.SERVICE(serviceId),
      CACHE_KEYS.STATS,
    ]);
  },

  onServiceDelete: (serviceId: string) => {
    cacheUtils.invalidate([
      CACHE_KEYS.SERVICES,
      CACHE_KEYS.SERVICE(serviceId),
      CACHE_KEYS.STATS,
    ]);
  },

  // Client operations
  onClientCreate: () => {
    cacheUtils.invalidate([CACHE_KEYS.CLIENTS, CACHE_KEYS.STATS]);
  },

  onClientUpdate: (clientId: string) => {
    cacheUtils.invalidate([
      CACHE_KEYS.CLIENTS,
      CACHE_KEYS.CLIENT(clientId),
      CACHE_KEYS.STATS,
    ]);
  },

  onClientDelete: (clientId: string) => {
    cacheUtils.invalidate([
      CACHE_KEYS.CLIENTS,
      CACHE_KEYS.CLIENT(clientId),
      CACHE_KEYS.STATS,
    ]);
  },

  // Bulk operations
  onBulkUpdate: () => {
    cacheUtils.invalidateAll();
  },

  // Custom invalidation
  custom: (keys: string[]) => {
    cacheUtils.invalidate(keys);
  },
};

// Helper function to wrap API calls with cache invalidation
export async function withCacheInvalidation<T>(
  apiCall: () => Promise<T>,
  invalidationFn: () => void
): Promise<T> {
  try {
    const result = await apiCall();
    invalidationFn();
    return result;
  } catch (error) {
    // Don't invalidate cache on error
    throw error;
  }
}

// React hook for cache invalidation in components
export function useCacheInvalidation() {
  return cacheInvalidation;
}
