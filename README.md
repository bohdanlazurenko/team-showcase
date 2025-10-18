# Team Showcase

A modern, responsive team showcase website built with Next.js 14, TypeScript, and Tailwind CSS. Display your team members with style and professionalism.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Responsive grid layout that adapts to all screen sizes
- Beautiful hover effects and transitions on team cards
- TypeScript for type safety and better developer experience
- Tailwind CSS for modern, utility-first styling
- Clean and maintainable component architecture
- SEO-friendly with proper metadata

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library

## Project Structure

```
├── app/
│   ├── api/
│   │   └── ping/
│   │       └── route.ts      # Health check endpoint
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout component
│   └── page.tsx              # Home page
├── components/
│   └── TeamCard.tsx          # Team member card component
├── lib/
│   └── team.ts               # Team data and utilities
├── types/
│   └── team.ts               # TypeScript type definitions
└── public/                   # Static assets
```

## Customization

### Adding Team Members

To add or modify team members, edit the `teamMembers` array in `lib/team.ts`:

```typescript
{
  id: 'unique-id',
  name: 'Member Name',
  role: 'Job Title',
  bio: 'Brief description',
  imageUrl: 'https://example.com/image.jpg'
}
```

### Styling

The project uses Tailwind CSS for styling. You can customize the design by:

1. Modifying Tailwind classes in components
2. Updating the Tailwind config in `tailwind.config.ts`
3. Adding custom styles to `app/globals.css`

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - learn about TypeScript.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS features.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.