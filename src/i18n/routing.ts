import {defineRouting} from 'next-intl/routing'
import {createNavigation} from 'next-intl/navigation'
import initLocales from '@/utils/locales'

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: initLocales,

  // Used when no locale matches
  defaultLocale: initLocales[0],
  localePrefix: 'as-needed',
})

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing)
