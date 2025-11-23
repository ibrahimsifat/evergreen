# Frontend Caching System

## Overview

A comprehensive client-side caching system has been implemented to improve performance and user experience. The system provides automatic data caching with intelligent cache invalidation when data is modified in the CMS.

## Features

### ✅ **Automatic Data Caching**

- **TTL (Time To Live)**: 5 minutes default (configurable)
- **Memory-based**: Fast access to cached data
- **Automatic expiration**: Stale data is automatically refreshed

### ✅ **Smart Cache Invalidation**

- **CRUD Operations**: Cache automatically invalidates on Create, Update, Delete
- **Optimistic Updates**: UI updates immediately for better UX
- **Cross-component**: All components using the same data are updated

### ✅ **Advanced Features**

- **Revalidation on Focus**: Data refreshes when user returns to tab
- **Error Handling**: Graceful fallbacks when API calls fail
- **Loading States**: Built-in loading indicators
- **Cache Statistics**: Debug information available

## Implementation

### Core Files

#### `hooks/use-data-cache.ts`

The main caching hook that provides:

- `useDataCache()` - Generic caching hook
- `useProjects()` - Predefined hook for projects
- `useServices()` - Predefined hook for services
- `useClients()` - Predefined hook for clients
- `useStats()` - Predefined hook for dashboard stats

#### `lib/cache-invalidation.ts`

Cache invalidation utilities:

- `cacheInvalidation.onProjectCreate()` - Invalidate on project creation
- `cacheInvalidation.onProjectUpdate(id)` - Invalidate on project update
- `cacheInvalidation.onProjectDelete(id)` - Invalidate on project deletion
- Similar functions for services and clients

## Usage Examples

### Basic Usage

```typescript
import { useProjects } from "@/hooks/use-data-cache";

function ProjectsPage() {
  const { data: projects, loading, error } = useProjects();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {projects.map((project) => (
        <div key={project.id}>{project.title}</div>
      ))}
    </div>
  );
}
```

### With Cache Invalidation

```typescript
import { useProjects } from "@/hooks/use-data-cache";
import { useCacheInvalidation } from "@/lib/cache-invalidation";

function CMSProjectsPage() {
  const { data: projects, mutate } = useProjects();
  const cacheInvalidation = useCacheInvalidation();

  const handleDelete = async (id: string) => {
    const response = await fetch(`/api/cms/projects/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      // Update UI immediately (optimistic update)
      mutate(projects.filter((p) => p.id !== id));
      // Invalidate cache for consistency
      cacheInvalidation.onProjectDelete(id);
    }
  };
}
```

### Custom Configuration

```typescript
const { data, loading } = useProjects({
  ttl: 10 * 60 * 1000, // 10 minutes
  enabled: true,
  revalidateOnFocus: false,
});
```

## Cache Keys

The system uses consistent cache keys:

```typescript
const CACHE_KEYS = {
  PROJECTS: "projects",
  SERVICES: "services",
  CLIENTS: "clients",
  PROJECT: (id: string) => `project-${id}`,
  SERVICE: (id: string) => `service-${id}`,
  CLIENT: (id: string) => `client-${id}`,
  STATS: "stats",
};
```

## Cache Invalidation Patterns

### Automatic Invalidation

- **Create**: Invalidates list cache and stats
- **Update**: Invalidates item cache, list cache, and stats
- **Delete**: Invalidates item cache, list cache, and stats

### Manual Invalidation

```typescript
import { cacheUtils } from "@/hooks/use-data-cache";

// Invalidate specific keys
cacheUtils.invalidate(["projects", "stats"]);

// Invalidate all cache
cacheUtils.invalidateAll();

// Invalidate by pattern
cacheUtils.invalidatePattern("project-");
```

## Performance Benefits

### Before Caching

- ❌ Every page load = API call
- ❌ Multiple components = Multiple API calls
- ❌ Slow loading times
- ❌ Unnecessary server load

### After Caching

- ✅ First load = API call + cache
- ✅ Subsequent loads = Instant from cache
- ✅ Fast loading times
- ✅ Reduced server load
- ✅ Better user experience

## Components Updated

### Frontend Pages

- ✅ `components/projects-section.tsx` - Uses `useProjects()`
- ✅ `app/services/page.tsx` - Uses `useServices()`
- ✅ `app/services/[slug]/page.tsx` - Uses `useService(id)`
- ✅ `app/cms/page.tsx` - Uses `useStats()`

### CMS Pages

- ✅ `app/cms/projects/page.tsx` - Uses `useProjects()` + cache invalidation
- ✅ `app/cms/services/page.tsx` - Uses `useServices()` + cache invalidation
- ✅ `app/cms/clients/page.tsx` - Uses `useClients()` + cache invalidation

## Testing

The cache system has been tested with:

- ✅ Data fetching and caching
- ✅ Cache invalidation on create
- ✅ Cache invalidation on update
- ✅ Cache invalidation on delete
- ✅ Optimistic updates
- ✅ Error handling

Run the test script:

```bash
node scripts/test-cache-system.js
```

## Configuration

### Environment Variables

No additional environment variables required.

### Customization Options

- **TTL**: Adjust cache duration per hook
- **Revalidation**: Enable/disable focus revalidation
- **Error Handling**: Custom error handling per component
- **Loading States**: Custom loading indicators

## Browser Compatibility

- ✅ Modern browsers with ES6+ support
- ✅ React 18+ required
- ✅ Next.js 13+ App Router

## Debugging

### Cache Statistics

```typescript
import { cacheUtils } from "@/hooks/use-data-cache";

const stats = cacheUtils.getStats();
console.log(stats); // { total: 5, valid: 4, expired: 1 }
```

### Console Logging

The system includes built-in logging for:

- Cache hits/misses
- Invalidation events
- Error states
- Performance metrics

## Future Enhancements

Potential improvements:

- [ ] Persistent cache (localStorage/sessionStorage)
- [ ] Background refresh
- [ ] Cache compression
- [ ] Advanced cache strategies (SWR, React Query integration)
- [ ] Cache analytics dashboard

## Troubleshooting

### Common Issues

1. **Cache not updating**: Check if cache invalidation is called after mutations
2. **Stale data**: Verify TTL settings and revalidation triggers
3. **Memory usage**: Monitor cache size with `cacheUtils.getStats()`
4. **Type errors**: Ensure proper TypeScript types for cached data

### Debug Commands

```typescript
// Check cache status
console.log(cacheUtils.getStats());

// Clear all cache
cacheUtils.invalidateAll();

// Check specific cache entry
console.log(cache.get("projects"));
```

---

**Status**: ✅ **Fully Implemented and Tested**

The caching system is now active across all frontend components and provides significant performance improvements with automatic cache invalidation when data is modified in the CMS.
