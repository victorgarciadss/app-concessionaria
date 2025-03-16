import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    const token = request.cookies.get("token")?.value;

    const protectedRoutes: string [] = ["/home"];

    const isProtectedRoute: boolean = protectedRoutes.includes(request.nextUrl.pathname);

    if(isProtectedRoute && !token) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/home", "/home/:path*"]
}