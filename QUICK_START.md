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

## 📁 Key Files

- `src/app/page.tsx` - Main page (currently shows component demo)
- `src/components/ui/` - shadcn/ui components
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