import { updateSession } from "@/lib/supabase/middleware"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  return await updateSession(request)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images and media - .svg, .png, .jpg, .jpeg, .gif, .webp, .mp4, .mp3, .mov, .avi, .mkv, .webm
     * - /reader-sample (public preview page)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|reader-sample|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp4|mp3|mov|avi|mkv|webm)$).*)",
  ],
}
