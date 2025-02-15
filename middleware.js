import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

{/* To not allow users to navigate to these routes without signin */}
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/account(.*)",
  "/transactions(.*)",
]);

export default clerkMiddleware(async (auth,req) => {
  const { userId } = await auth();

  if(!userId && isProtectedRoute(req)) {T
    const { redirectToSignIn } = await auth();

    return redirectToSignIn();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};