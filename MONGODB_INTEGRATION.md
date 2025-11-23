# MongoDB Integration Guide

This guide explains how to integrate MongoDB Atlas with your Al-Basari Construction CMS, replacing the local JSON file storage.

## Prerequisites

1. **MongoDB Atlas Account**: You should have already set up MongoDB Atlas through Vercel's native integration as mentioned in your request.
2. **Vercel Project**: Your project should be deployed on Vercel with the MongoDB integration configured.

## Setup Instructions

### 1. Environment Variables

Add the MongoDB connection string to your environment variables:

1. In your Vercel dashboard, go to your project settings
2. Navigate to the "Environment Variables" section
3. Add a new environment variable:
   - **Name**: `MONGODB_URI`
   - **Value**: Your MongoDB Atlas connection string (this should be automatically provided by Vercel's MongoDB integration)

### 2. Local Development Setup

For local development, create a `.env.local` file in your project root:

```bash
# Copy from env.example and fill in your values
cp env.example .env.local
```

Then add your MongoDB connection string to `.env.local`:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/albasari_cms?retryWrites=true&w=majority
```

### 3. Data Migration

To migrate your existing JSON data to MongoDB, run the migration script:

```bash
# Run the migration script (JavaScript version - recommended)
node scripts/migrate-to-mongodb.js

# Or if you prefer TypeScript version
npx ts-node scripts/migrate-to-mongodb.ts
```

This script will:

- Read all existing data from your JSON files
- Clear the MongoDB collections
- Insert all the data into MongoDB
- Verify the migration was successful

### 4. Database Collections

The integration creates three collections in your MongoDB database:

- **`projects`**: Stores all project data
- **`services`**: Stores all service data
- **`clients`**: Stores all client data

## API Changes

The API endpoints remain the same, but now they interact with MongoDB instead of JSON files:

### Projects API

- `GET /api/cms/projects` - Fetch all projects
- `POST /api/cms/projects` - Create new project
- `GET /api/cms/projects/[id]` - Fetch single project
- `PUT /api/cms/projects/[id]` - Update project
- `DELETE /api/cms/projects/[id]` - Delete project

### Services API

- `GET /api/cms/services` - Fetch all services
- `POST /api/cms/services` - Create new service
- `GET /api/cms/services/[id]` - Fetch single service
- `PUT /api/cms/services/[id]` - Update service
- `DELETE /api/cms/services/[id]` - Delete service

### Clients API

- `GET /api/cms/clients` - Fetch all clients
- `POST /api/cms/clients` - Create new client
- `GET /api/cms/clients/[id]` - Fetch single client
- `PUT /api/cms/clients/[id]` - Update client
- `DELETE /api/cms/clients/[id]` - Delete client

## Data Models

### Project Model

```typescript
interface Project {
  _id?: string; // MongoDB ObjectId
  id: string; // Custom ID for frontend compatibility
  title: string;
  description: string;
  detailedDescription: string;
  client: string;
  location: string;
  startDate: string;
  endDate: string;
  status: "planned" | "in-progress" | "completed" | "on-hold";
  category:
    | "civil"
    | "mep"
    | "structural"
    | "industrial"
    | "commercial"
    | "residential";
  budget: string;
  images: string[];
  services: string[];
  createdAt: string;
  updatedAt: string;
}
```

### Service Model

```typescript
interface Service {
  _id?: string; // MongoDB ObjectId
  id: string; // Custom ID for frontend compatibility
  title: string;
  shortTitle: string;
  description: string;
  detailedDescription: string;
  category:
    | "electrical"
    | "construction"
    | "mechanical"
    | "supply"
    | "equipment"
    | "manpower";
  icon: string;
  images: string[];
  services: string[];
  createdAt: string;
  updatedAt: string;
  // Additional optional fields for specific service types
}
```

### Client Model

```typescript
interface Client {
  _id?: string; // MongoDB ObjectId
  id: string; // Custom ID for frontend compatibility
  name: string;
  description: string;
  website: string;
  logo: string;
  industry: string;
  location: string;
  established: string;
  projects: string[];
  testimonial: string;
  contactPerson: string;
  contactEmail: string;
  contactPhone: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
```

## Benefits of MongoDB Integration

1. **Scalability**: MongoDB can handle much larger datasets than JSON files
2. **Performance**: Better query performance and indexing capabilities
3. **Reliability**: Built-in backup and replication features
4. **Real-time**: Better support for concurrent access
5. **Cloud Integration**: Seamless integration with Vercel's infrastructure

## Troubleshooting

### Connection Issues

- Verify your `MONGODB_URI` environment variable is set correctly
- Check that your MongoDB Atlas cluster is running
- Ensure your IP address is whitelisted in MongoDB Atlas (or use 0.0.0.0/0 for Vercel)

### Migration Issues

- Make sure all JSON files exist and are valid
- Check that you have write permissions to the MongoDB database
- Verify the migration script has access to the database

### API Issues

- Check the browser console for any error messages
- Verify that the MongoDB connection is established
- Ensure all required fields are provided when creating/updating records

## Support

If you encounter any issues with the MongoDB integration:

1. Check the Vercel function logs for error details
2. Verify your MongoDB Atlas cluster status
3. Ensure all environment variables are properly set
4. Test the connection using MongoDB Compass or similar tools

## Next Steps

After successful integration:

1. Test all CMS functionality to ensure everything works correctly
2. Consider setting up MongoDB indexes for better performance
3. Implement data validation rules if needed
4. Set up monitoring and alerts for your MongoDB cluster
