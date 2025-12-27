import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['th', 'en']
const defaultLocale = 'th'

// Get the preferred locale from the request
function getLocale(request: NextRequest): string {
  // Check if there's a locale in the cookie
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale
  }

  // Check Accept-Language header
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    const preferredLocales = acceptLanguage
      .split(',')
      .map(lang => lang.split(';')[0].trim().toLowerCase())
    
    for (const lang of preferredLocales) {
      // Check for exact match
      if (locales.includes(lang)) {
        return lang
      }
      // Check for language prefix match (e.g., 'en-US' -> 'en')
      const langPrefix = lang.split('-')[0]
      if (locales.includes(langPrefix)) {
        return langPrefix
      }
    }
  }

  return defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  // Redirect to the locale path
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, static files, etc.)
    '/((?!_next|api|favicon.ico|.*\\..*).*)',
  ],
}

