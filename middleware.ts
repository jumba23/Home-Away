import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(["/", "/properties(.*)"]);

// const isProtectedRoute = createRouteMatcher([
//   "/bookings(.*)",
//   "/checkout(.*)",
//   "/favorites(.*)",
//   "/profile(.*)",
//   "/rentals(.*)",
//   "/reviews(.*)",
// ]);

const isAdminRoute = createRouteMatcher(["/admin(.*)"]); // define the route that is only accessible by the admin user
export default clerkMiddleware(async (auth, req) => {
  const isAdminUser = auth().userId === process.env.ADMIN_USER_ID; // check if the user is an admin user
  if (isAdminRoute(req) && !isAdminUser) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (!isPublicRoute(req)) auth().protect();
}); // protect the route that is not public

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"], //
};
