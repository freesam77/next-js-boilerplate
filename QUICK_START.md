# Quick Start Guide

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Available Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Adding More shadcn/ui Components

```bash
# Add a single component
npx shadcn@latest add button

# Add multiple components
npx shadcn@latest add dialog dropdown-menu select

# Popular components you might want to add:
npx shadcn@latest add form textarea checkbox radio-group
npx shadcn@latest add table pagination
npx shadcn@latest add alert alert-dialog
npx shadcn@latest add toast progress
```

## 🔄 TanStack Query Usage

The boilerplate includes TanStack Query for data fetching. Here's a quick example:

```tsx
import { useQuery } from '@tanstack/react-query';

// Define your API function
const fetchData = async () => {
  const response = await fetch('/api/data');
  return response.json();
};

// Use in your component
function MyComponent() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['data'],
    queryFn: fetchData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>{/* Your data */}</div>;
}
```

### TanStack Query DevTools

The dev tools are automatically included and can be accessed by:
- Opening the browser dev tools
- Looking for the "React Query" tab
- This shows all queries, their status, and cache information

## 📁 Key Files

- `src/app/page.tsx` - Main page (currently shows component demo)
- `src/components/ui/` - shadcn/ui components
- `src/components/query-example.tsx` - TanStack Query example
- `src/lib/providers.tsx` - TanStack Query provider setup
- `src/app/globals.css` - Global styles and CSS variables
- `components.json` - shadcn/ui configuration
- `tailwind.config.ts` - Tailwind CSS configuration

## 🎯 Next Steps

1. **Customize the theme:**
   - Edit `src/app/globals.css` to modify CSS variables
   - Update `tailwind.config.ts` for custom colors/spacing

2. **Add more pages:**
   - Create new files in `src/app/` directory
   - Use the App Router for routing

3. **Add more components:**
   - Use `npx shadcn@latest add <component>` to add more UI components
   - Create custom components in `src/components/`

4. **Set up your database:**
   - Add your preferred database (Prisma, Supabase, etc.)
   - Set up authentication if needed

## 🔧 Development Tips

- **Hot Reload:** Changes are reflected immediately in development
- **TypeScript:** Full type safety with excellent IntelliSense
- **Import Aliases:** Use `@/` prefix for imports from src directory
- **Dark Mode:** Built-in dark mode support with CSS variables
- **Responsive:** Mobile-first design with Tailwind's responsive utilities

## 📚 Useful Resources

- [shadcn/ui Components](https://ui.shadcn.com/docs/components)
- [Tailwind CSS Classes](https://tailwindcss.com/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Manual Build
```bash
npm run build
npm start
```

Happy coding! 🎉 