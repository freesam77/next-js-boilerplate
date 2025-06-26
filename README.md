# Next.js + shadcn/ui Boilerplate

A modern, beautiful, and accessible Next.js boilerplate with TypeScript, Tailwind CSS, and shadcn/ui components.

## 🚀 Features

- **Next.js 15** - React framework with App Router
- **TypeScript** - Full type safety and IntelliSense
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful and accessible components
- **ESLint** - Code linting and formatting
- **Dark Mode** - Built-in dark mode support
- **Responsive Design** - Mobile-first approach

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Radix UI](https://www.radix-ui.com/) - Accessible components

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd my-nextjs-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Available Components

The following shadcn/ui components are pre-installed:

- **Button** - Various button variants and sizes
- **Card** - Content containers with header, content, and footer
- **Input** - Form input fields
- **Label** - Form labels

### Adding More Components

To add more shadcn/ui components:

```bash
npx shadcn@latest add <component-name>
```

Example:
```bash
npx shadcn@latest add dialog dropdown-menu select
```

## 📁 Project Structure

```
my-nextjs-app/
├── src/
│   ├── app/                 # App Router pages
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/          # React components
│   │   └── ui/             # shadcn/ui components
│   └── lib/                # Utility functions
├── public/                 # Static assets
├── components.json         # shadcn/ui configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🎯 Key Features

### TypeScript Support
- Full type safety throughout the application
- Excellent IntelliSense and autocomplete
- Type checking for props and API responses

### Tailwind CSS
- Utility-first CSS framework
- Customizable design system
- Responsive design utilities
- Dark mode support

### shadcn/ui Components
- Accessible by default
- Customizable and themeable
- Built on Radix UI primitives
- Consistent design language

### Development Experience
- Hot reloading
- ESLint configuration
- TypeScript strict mode
- Import aliases (`@/*`)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository to Vercel
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:

```bash
npm run build
npm start
```

## 📚 Useful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful components
- [Radix UI](https://www.radix-ui.com/) for the accessible primitives
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first approach
- [Next.js](https://nextjs.org/) for the amazing React framework
# next-js-boilerplate
