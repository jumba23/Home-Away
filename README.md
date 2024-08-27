# Home Away

**Home Away** is a full-featured web application built with Next.js and TypeScript. It is designed as a replica of the popular vacation rental platform, Airbnb. This project showcases a wide array of modern web development techniques, libraries, and best practices.

## Features

- **User Authentication:** Secure login and registration using Clerk.
- **Property Listings:** Browse, search, and filter properties.
- **Booking System:** Book properties with integrated Stripe payment processing.
- **User Dashboards:** Manage your bookings, listings, and account details.
- **Responsive Design:** Fully responsive design with Tailwind CSS and Shadcn-ui components.
- **Data Visualization:** Visualize data trends with Recharts.
- **Real-time State Management:** State management powered by Zustand.
- **Form Validation:** Robust form validation using Zod.
- **Server-Side CRUD Operations:** All CRUD operations are handled server-side with Next.js Server Actions.
- **ORM:** Database operations handled with Prisma.
- **Database:** Data is stored and managed with Supabase.
- **Debounce Hooks:** Use-debounce to manage rapid state updates efficiently.

## Technologies Used

- **Next.js:** React framework for server-side rendering and static site generation.
- **TypeScript:** Type-safe JavaScript, enhancing code quality and maintainability.
- **Zod:** Schema validation and type inference.
- **Zustand:** A small, fast state management library.
- **use-debounce:** Debounce hook to improve performance.
- **Recharts:** Charting library for data visualization.
- **Stripe:** Payment processing for handling transactions.
- **Tailwind CSS:** Utility-first CSS framework for rapid UI development.
- **Shadcn-ui:** Component library for building beautiful UIs.
- **Prisma:** Next-generation ORM for database operations.
- **Supabase:** Open-source Firebase alternative for database management.
- **Clerk:** Authentication and user management platform.
- **Vercel:** Platform for deploying and hosting the application.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **PostgreSQL** (for Supabase)
- **Vercel CLI** (for deployment)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/home-away.git
   cd home-away

   ```

2. Install dependencies:

````bash
 npm install or yarn install

3. Create a `.env.local` file in the root directory and add the following environment variables:

 ```bash
 NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
 NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
 NEXT_PUBLIC_SUPABASE_SECRET_KEY=your_supabase_secret_key
 NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
 NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your_stripe_public_key
 STRIPE_SECRET_KEY=your_stripe_secret_key
````

4. Run the development server:

   ```bash
   npm run dev or yarn dev

   ```

5. Run database migrations:

   ```bash
   npx prisma migrate dev

   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Deployment

1. Push your repository to GitHub.
2. Connect your GitHub repository to Vercel.
3. Configure the necessary environment variables in Vercel.
4. Deploy your application.

## Acknowledgments

Airbnb for the inspiration.
Vercel for hosting and deployment.
All the open-source libraries and tools used in this project.

### Key Components Explained:

- **Zod & Zustand:** Zod ensures your data schemas are validated, catching potential issues early, while Zustand provides a lightweight, performant state management solution. Both are crucial for maintaining robust, reliable application logic.
- **Prisma & Supabase:** Prisma simplifies database interactions, while Supabase offers a powerful backend solution, combining to streamline your application's data layer.
- **Server Actions:** Handling CRUD operations on the server side enhances performance and security, crucial for applications like this with sensitive data (e.g., user bookings and payments).

This README provides a clear overview of your project, the technologies used, and instructions for getting started.
