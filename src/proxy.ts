import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const MAINTENANCE_ENABLED = true;
const MAINTENANCE_PATH = "/manutencao";
const RETRY_AFTER_SECONDS = 60 * 60 * 24 * 7;

export function proxy(request: NextRequest) {
  if (!MAINTENANCE_ENABLED) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = MAINTENANCE_PATH;

  const response = NextResponse.rewrite(url, {
    status: 503,
    headers: {
      "Retry-After": RETRY_AFTER_SECONDS.toString(),
      "X-Robots-Tag": "noindex, nofollow",
      "Cache-Control": "no-store, max-age=0",
    },
  });

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|og|Header|Footer|Sections|Models|email-signature).*)",
  ],
};
