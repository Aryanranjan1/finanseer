
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from 'firebase-admin';
import { cookies } from 'next/headers';

// This function is not used yet, but it's a good pattern for handling admin initialization
// async function initializeAdminApp() {
//   const { serviceAccountId } = await getServiceAccount();
//   if (!getApps().length) {
//     initializeApp({
//       credential: applicationDefault(),
//       serviceAccountId,
//     });
//   }
// }

export async function middleware(request: NextRequest) {
  // const cookieStore = cookies();
  // const sessionCookie = cookieStore.get('session')?.value;

  // // If there's no session cookie, allow access to public pages
  // if (!sessionCookie) {
  //   return NextResponse.next();
  // }

  // try {
  //   // Verify the session cookie.
  //   const decodedClaims = await auth().verifySessionCookie(sessionCookie, true);
    
  //   const { pathname } = request.nextUrl;
  //   const hostname = request.headers.get('host')!;

  //   // Determine the target domain
  //   const targetDomain = process.env.NODE_ENV === 'production' 
  //     ? 'yourbroker.com'
  //     : 'localhost:9002'; // Adjust port if needed

  //   const isAdmin = decodedClaims.admin === true;

  //   // Redirect admins to the admin subdomain
  //   if (isAdmin) {
  //     if (!hostname.startsWith(`admin.`)) {
  //       return NextResponse.redirect(`http://admin.${targetDomain}${pathname}`);
  //     }
  //   } 
  //   // Redirect regular users to the dashboard subdomain
  //   else {
  //     if (!hostname.startsWith(`dashboard.`)) {
  //       return NextResponse.redirect(`http://dashboard.${targetDomain}${pathname}`);
  //     }
  //   }

  // } catch (error) {
  //   // Session cookie is invalid. Clear it and redirect to login.
  //   const response = NextResponse.redirect(new URL('/login', request.url));
  //   response.cookies.delete('session');
  //   return response;
  // }
  
  return NextResponse.next();
}

export const config = {
  // Match all paths except for static assets, API routes, and login pages.
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|login|admin/login).*)',
  ],
};
