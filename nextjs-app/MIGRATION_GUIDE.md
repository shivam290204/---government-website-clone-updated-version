# Next.js Migration Guide

## 🎉 Migration Complete!

Your government project has been successfully converted from **Vite + React** to **Next.js 16** with **App Router**.

### ✅ What's Been Set Up

1. **Next.js 16** with App Router (modern routing system)
2. **TypeScript** for type safety
3. **Tailwind CSS** for styling
4. **i18n Support** - English & Hindi with language detection
5. **Axios API Client** - Pre-configured to connect to Spring Boot backend (port 8080)
6. **Header & Footer Components** - Responsive navigation with language switcher
7. **Environment Configuration** - `.env.local` ready for backend API URL

### 📁 Project Structure

```
nextjs-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with i18n provider
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Footer.tsx          # Footer
│   │   └── I18nProvider.tsx    # i18n setup
│   ├── lib/
│   │   └── i18n.ts            # i18n configuration
│   ├── api/
│   │   └── client.ts          # Axios API client with interceptors
│   └── locales/
│       ├── en/
│       │   └── translation.json
│       └── hi/
│           └── translation.json
├── .env.local                  # Backend API URL
├── package.json               # Dependencies
├── tailwind.config.ts         # Tailwind configuration
└── tsconfig.json             # TypeScript configuration
```

### 🚀 Getting Started

#### Step 1: Install Dependencies

```bash
cd nextjs-app
npm install
```

This installs:
- `next` - Next.js framework
- `react` & `react-dom` - React libraries
- `react-i18next` - i18n support
- `i18next-browser-languagedetector` - Automatic language detection
- `axios` - HTTP client for API calls
- `tailwindcss` - Utility-first CSS framework
- `lucide-react` - Icon library

#### Step 2: Start Development Server

```bash
npm run dev
```

The app will start at **http://localhost:3000**

#### Step 3: Verify Backend Connection

The frontend is pre-configured to call the Spring Boot backend on `http://localhost:8080`.

Ensure your backend is running (should already be running on port 8080).

### 🔄 Remaining Migration Tasks

#### 1. **Create Additional Pages**

Create the following page files in `src/app/`:

**`src/app/about/page.tsx`** - About Us page
**`src/app/contact/page.tsx`** - Contact Us page
**`src/app/login/page.tsx`** - Login page (MMUY & BLUY)
**`src/app/schemes/page.tsx`** - Schemes information
**`src/app/success-stories/page.tsx`** - Success stories

#### 2. **Migrate Components**

Copy React components from the original `src/components/` folder:
- `HeroSection.tsx`
- `ImportantNotices.tsx`
- `LatestUpdates.tsx`
- `QuickLinks.tsx`
- `Schemes.tsx`
- `TopStrip.tsx`

Update imports to use Next.js features:
- Replace `useHistory()` with Next.js `useRouter()`
- Replace `<Router>` elements with Next.js file-based routing
- Update image imports to use `next/image`

#### 3. **API Integration**

Use the pre-configured axios client for API calls:

```typescript
import client from '@/api/client';

// Example: Login endpoint
const login = async (credentials: { email: string; password: string }) => {
  const response = await client.post('/api/login', credentials);
  return response.data;
};

// Example: Fetch users
const getUsers = async () => {
  const response = await client.get('/api/users');
  return response.data;
};
```

#### 4. **Add More Translation Keys**

The translation files already have basic keys. Add more as needed:

**`src/locales/en/translation.json`**
**`src/locales/hi/translation.json`**

#### 5. **Configure Tailwind CSS**

The Tailwind configuration is already set up. Customize in `tailwind.config.ts` if needed.

#### 6. **Environment Variables**

The `.env.local` file is configured with:
```
NEXT_PUBLIC_API_URL=http://localhost:8080
```

Add any additional environment variables here (they must start with `NEXT_PUBLIC_` to be accessible in browser).

### 🌐 Language Switching

The app automatically:
1. Detects browser language preference
2. Saves language preference to localStorage
3. Provides a language switcher in the Header

Users can click the language toggle button to switch between English and Hindi.

### 🔐 API Security Features

The axios client includes:
- **Request Interceptor**: Automatically adds auth token from localStorage
- **Response Interceptor**: Handles 401 errors and redirects to login
- **CORS Configuration**: Configured for Spring Boot backend

### 📦 Build & Deployment

**Development:**
```bash
npm run dev
```

**Production Build:**
```bash
npm run build
npm start
```

**Lint Code:**
```bash
npm run lint
```

### 🎨 Key Differences from Vite

| Feature | Vite | Next.js |
|---------|------|---------|
| Routing | React Router | File-based (App Router) |
| Rendering | Client-only | SSR + Client |
| API Routes | Separate backend | Built-in `/app/api/` |
| Image Optimization | Manual | Built-in `next/image` |
| Deployment | Static hosting | Vercel or Node.js server |
| Build Output | `dist/` | `.next/` |

### 🐛 Troubleshooting

**Port 3000 already in use:**
```bash
npm run dev -- -p 3001
```

**i18n not loading:**
Make sure `I18nProvider` wraps your entire app in the layout.

**Backend API not responding:**
- Check NEXT_PUBLIC_API_URL in `.env.local`
- Ensure Spring Boot backend is running on port 8080
- Check browser console for CORS errors

**Components not rendering:**
- Ensure components use `'use client'` directive if they use React hooks
- Check that all imports are correct

### 📚 Next.js Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)
- [Tailwind CSS Guide](https://tailwindcss.com/docs)
- [i18next Documentation](https://www.i18next.com/)

### 🎯 Migration Checklist

- [x] Create Next.js project with App Router
- [x] Set up TypeScript & Tailwind CSS
- [x] Configure i18n (en, hi)
- [x] Create Header & Footer components
- [x] Set up axios API client
- [x] Create home page
- [ ] Create additional pages (About, Contact, Login, etc.)
- [ ] Migrate remaining React components
- [ ] Test API integration
- [ ] Update all translations
- [ ] Test language switching
- [ ] Production build & deployment

### 📝 Next Steps

1. Run `npm install` to install dependencies
2. Run `npm run dev` to start the development server
3. Open http://localhost:3000 in your browser
4. Create additional pages following the examples
5. Migrate and test remaining components
6. Deploy to production

---

**Happy migrating! 🚀**

If you encounter any issues, check the Next.js documentation or the troubleshooting section above.
