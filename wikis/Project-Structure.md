# Project Structure

## Root Directory
```
├── app/                    # Next.js app directory for routing and pages
├── components/            # Reusable React components
├── constants/            # Application constants and enums
├── containers/           # Complex components with business logic
├── libs/                # Library configurations and wrappers
├── stories/             # Storybook stories and assets
├── styles/              # Global stylesheets
├── utils/               # Utility functions
├── public/              # Static assets (images, icons, etc.)
├── wikis/               # Documentation and guidelines
└── src/                 # Main source code directory
```

## Special Directories

### Source Directory (`/src`)
```
/src
├── app/                # Next.js app directory for routing and pages
├── components/         # Reusable React components
├── constant/           # Application constants and enums
├── container/          # Complex components with business logic
├── libs/               # Library configurations and wrappers
├── stories/            # Storybook stories and assets
├── styles/             # Global stylesheets
├── utils/              # Utility functions
└── __tests__/          # Unit and integration tests
```

### Public Directory
```
public/
├── images/             # Images and illustrations
├── result/             # Lighthouse and performance results
└── services/           # Service-related assets
```

## Configuration Files

### Core Configuration
- `next.config.js` - Next.js configuration
- `tailwind.config.ts` - TailwindCSS configuration
- `tsconfig.json` - TypeScript configuration
- `jest.config.ts` - Jest testing configuration
- `postcss.config.js` - PostCSS configuration

### Documentation
- `README.md` - Project overview and setup instructions
- `wikis/` - Additional guidelines and documentation

### Build and Deployment
- `Dockerfile` - Container configuration
- `vercel.sh` - Vercel deployment script

## Key Features

### App Directory (`/src/app`)
- Page components
- Route handlers
- Layouts
- Error boundaries

### Components (`/src/components`)
- UI components
- Form components
- Layout components
- Common widgets

### Containers (`/src/container`)
- Business logic components
- Dynamic service containers
- Home and service-specific containers

### Libs (`/src/libs`)
- Analytics library
- API client wrappers

### Utils (`/src/utils`)
- Helper functions
- Custom hooks

### Tests (`/src/__tests__`)
- Unit tests
- Integration tests

## Asset Organization

### Public Assets
- Brand assets (logos, icons)
- Static documents
- Illustrations
- Background images
- UI icons

### Development Assets
- Test fixtures
- Mock data
- Development configurations
- Environment templates