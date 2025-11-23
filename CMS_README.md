# Content Management System (CMS) - Al-Basari Construction

This guide provides a comprehensive overview of the implemented CMS system for the Al-Basari Construction website. The CMS includes authentication, content management for projects/services, clients management, and file uploads.

## 🚀 Features

- **Authentication System**: Simple login system with localStorage and cookies
- **Project Management**: Full CRUD operations for Projects
- **Service Management**: Full CRUD operations for Services
- **Client Management**: Image upload and management
- **File Upload**: Secure image upload with validation
- **Responsive Design**: Mobile-first approach
- **Real-time Updates**: Immediate UI updates after operations

## 📁 Project Structure

### Frontend Structure

```
app/cms/
├── page.tsx                 # CMS entry point with routing
├── login/page.tsx          # Authentication page
├── projects/
│   ├── page.tsx            # Projects listing
│   ├── new/page.tsx        # Add new project
│   └── [id]/edit/page.tsx  # Edit existing project
├── services/
│   ├── page.tsx            # Services listing
│   ├── new/page.tsx        # Add new service
│   └── [id]/edit/page.tsx  # Edit existing service
└── clients/
    ├── page.tsx            # Clients listing
    ├── new/page.tsx        # Add new client
    └── [id]/edit/page.tsx  # Edit existing client
```

### API Structure

```
app/api/cms/
├── projects/
│   ├── route.ts            # GET, POST operations
│   └── [id]/route.ts       # PUT, DELETE operations
├── services/
│   ├── route.ts            # GET, POST operations
│   └── [id]/route.ts       # PUT, DELETE operations
├── clients/
│   ├── route.ts            # GET, POST operations
│   └── [id]/route.ts       # PUT, DELETE operations
└── upload/route.ts         # File upload endpoint

app/api/auth/
├── login/route.ts          # Authentication login
├── logout/route.ts         # Authentication logout
└── verify/route.ts         # Session verification
```

### Data Storage

```
lib/data/
├── projects.json           # Projects data
└── clients.json            # Clients data

lib/
└── services-data.json      # Services data

public/uploads/
├── projects/               # Project images
├── services/               # Service images
├── clients/                # Client images
└── general/                # General uploads
```

### Components

```
components/cms/
├── auth-guard.tsx          # Authentication wrapper
├── file-upload.tsx         # File upload component
└── data-table.tsx          # Reusable data table
```

## 🔐 Authentication System

### Features

- Simple hardcoded email/password authentication
- localStorage for client-side persistence
- Cookie-based server-side verification
- Automatic redirect to login if not authenticated
- Logout functionality with cleanup

### Demo Credentials

- **Email**: admin@albasari.com
- **Password**: admin123

### Authentication Flow

1. User enters credentials on `/cms/login`
2. Server validates credentials and sets session cookie
3. Client-side stores user info in localStorage
4. Protected routes check authentication via `/api/auth/verify`
5. Session expires after 7 days

## 📊 Data Management

### Projects

- **Fields**: title, description, detailedDescription, client, location, startDate, endDate, status, category, budget, services, images
- **Status Options**: planned, in-progress, completed, on-hold
- **Categories**: industrial, commercial, residential, infrastructure
- **Services**: Multi-select from available services

### Services

- **Fields**: id, title, shortTitle, description, detailedDescription, category, icon, images, services
- **Categories**: electrical, construction, mechanical, supply, equipment, manpower
- **Icons**: Zap, Building2, Package, Wrench, etc.

### Clients

- **Fields**: name, description, website, logo, industry, location, established, projects, testimonial, contactPerson, contactEmail, contactPhone, isActive
- **Status**: Active/Inactive toggle
- **Contact Information**: Person, email, phone

## 🖼️ File Upload System

### Features

- **Supported Formats**: JPEG, JPG, PNG, GIF, WebP
- **File Size Limit**: 5MB per file
- **Categories**: projects, services, clients, general
- **Security**: File type validation, size limits
- **Storage**: Organized in category-specific directories

### Upload Process

1. Client selects files
2. Files validated for type and size
3. Unique filenames generated (timestamp + random string)
4. Files saved to appropriate category directory
5. URLs returned for database storage

## 🎨 UI Components

### Reusable Components

- **AuthGuard**: Protects routes requiring authentication
- **FileUpload**: Handles file uploads with validation
- **DataTable**: Sortable, searchable, paginated data display

### Design System

- **Framework**: Tailwind CSS
- **Components**: shadcn/ui components
- **Icons**: Lucide React icons
- **Responsive**: Mobile-first design approach

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm
- Next.js 14+

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   # or
   pnpm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. Access the CMS at: `http://localhost:3000/cms`

### First Login

1. Navigate to `/cms/login`
2. Use demo credentials:
   - Email: admin@albasari.com
   - Password: admin123
3. Access the dashboard at `/cms`

## 📝 Usage Guide

### Managing Projects

1. **View Projects**: Navigate to `/cms/projects`
2. **Add Project**: Click "Add Project" button
3. **Edit Project**: Click edit button on project card
4. **Delete Project**: Click delete button (with confirmation)

### Managing Services

1. **View Services**: Navigate to `/cms/services`
2. **Add Service**: Click "Add Service" button
3. **Edit Service**: Click edit button on service card
4. **Delete Service**: Click delete button (with confirmation)

### Managing Clients

1. **View Clients**: Navigate to `/cms/clients`
2. **Add Client**: Click "Add Client" button
3. **Edit Client**: Click edit button on client card
4. **Toggle Status**: Activate/deactivate clients
5. **Delete Client**: Click delete button (with confirmation)

### File Management

- Upload images during project/service/client creation
- Images are automatically organized by category
- Remove images by clicking the X button
- Supported formats: JPEG, PNG, GIF, WebP

## 🔧 API Endpoints

### Authentication

- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/verify` - Verify session

### Projects

- `GET /api/cms/projects` - List all projects
- `POST /api/cms/projects` - Create new project
- `GET /api/cms/projects/[id]` - Get single project
- `PUT /api/cms/projects/[id]` - Update project
- `DELETE /api/cms/projects/[id]` - Delete project

### Services

- `GET /api/cms/services` - List all services
- `POST /api/cms/services` - Create new service
- `GET /api/cms/services/[id]` - Get single service
- `PUT /api/cms/services/[id]` - Update service
- `DELETE /api/cms/services/[id]` - Delete service

### Clients

- `GET /api/cms/clients` - List all clients
- `POST /api/cms/clients` - Create new client
- `GET /api/cms/clients/[id]` - Get single client
- `PUT /api/cms/clients/[id]` - Update client
- `DELETE /api/cms/clients/[id]` - Delete client

### File Upload

- `POST /api/cms/upload` - Upload files
  - Body: FormData with 'file' and 'category'
  - Response: File URL and metadata

## 🛡️ Security Features

- **Authentication**: Session-based authentication
- **File Validation**: Type and size validation
- **Input Sanitization**: Basic input validation
- **Error Handling**: Comprehensive error handling
- **CORS Protection**: Proper CORS configuration

## 📱 Responsive Design

- **Mobile-First**: Optimized for mobile devices
- **Breakpoints**: sm, md, lg, xl responsive breakpoints
- **Touch-Friendly**: Large touch targets
- **Accessible**: ARIA labels and keyboard navigation

## 🔄 Real-time Updates

- **Immediate UI Updates**: Changes reflect instantly
- **Optimistic Updates**: UI updates before server confirmation
- **Error Rollback**: Revert changes on error
- **Loading States**: Visual feedback during operations

## 🚀 Deployment

### Production Considerations

1. **Environment Variables**: Set NODE_ENV=production
2. **File Storage**: Consider cloud storage for uploads
3. **Database**: Consider migrating from JSON to database
4. **Security**: Implement proper authentication system
5. **Backup**: Regular data backups

### Static Export

The CMS can be deployed as a static site with API routes:

```bash
npm run build
npm run export
```

## 🐛 Troubleshooting

### Common Issues

1. **Authentication Fails**: Check credentials and session cookies
2. **File Upload Fails**: Verify file size and type
3. **Data Not Loading**: Check API endpoints and data files
4. **Styling Issues**: Ensure Tailwind CSS is properly configured

### Debug Mode

Enable debug logging by setting:

```javascript
console.log("Debug mode enabled");
```

## 📈 Future Enhancements

### Planned Features

- **User Management**: Multiple user accounts
- **Role-Based Access**: Different permission levels
- **Database Integration**: PostgreSQL/MongoDB
- **Advanced Search**: Full-text search capabilities
- **Bulk Operations**: Mass import/export
- **Audit Logs**: Track all changes
- **API Documentation**: Swagger/OpenAPI docs
- **Testing**: Unit and integration tests

### Performance Optimizations

- **Image Optimization**: WebP conversion, resizing
- **Caching**: Redis for session storage
- **CDN**: CloudFront for static assets
- **Database Indexing**: Optimized queries

## 📞 Support

For technical support or questions about the CMS:

- Check the troubleshooting section
- Review the API documentation
- Examine the component source code
- Test with the demo credentials

## 📄 License

This CMS system is part of the Al-Basari Construction website project.

---

**Note**: This is a demo CMS system with hardcoded credentials. For production use, implement proper authentication, database storage, and security measures.
