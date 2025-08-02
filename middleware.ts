import { withAuth } from "next-auth/middleware";

// Define the paths that should be protected by authentication
export const config = {
  matcher: [
    // You can add specific paths that should be protected
    "/dashboard/:path*",
    // "/profile/:path*",
    // "/settings/:path*",
  ],
};

export default withAuth({
  pages: {
    signIn: "/login",
  },
});
