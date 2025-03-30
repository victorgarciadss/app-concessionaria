import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    const token = request.cookies.get("token")?.value;

    const protectedRoutes: string[] = ["/dashboard", "/register"];

    const isProtectedRoute: boolean = protectedRoutes.some((route) => {
        return request.nextUrl.pathname.startsWith(route);
    });

    if(isProtectedRoute && !token) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    if(request.nextUrl.pathname.startsWith("/register")) {
        const role = request.cookies.get("role")?.value;

        if(role === "ROLE_EMPLOYEE") {
            return NextResponse.redirect(new URL("/dashboard/clientes", request.url));
        }
        if(!role) {
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard", "/dashboard/:path*", "/register"]
}