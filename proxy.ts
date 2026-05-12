import { NextRequest, NextResponse } from "next/server";

const MD_ROUTES: Record<string, string> = {
  "/": "/md",
  "/kontakt": "/md/kontakt",
};

export function proxy(req: NextRequest) {
  const accept = req.headers.get("accept") ?? "";
  if (!accept.includes("text/markdown")) return NextResponse.next();

  const path = req.nextUrl.pathname.replace(/\/+$/, "") || "/";
  const target = MD_ROUTES[path];
  if (!target) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = target;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/", "/kontakt"],
};
