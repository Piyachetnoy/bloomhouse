import 'server-only'

const dictionaries = {
  th: () => import('./dictionaries/th.json').then((module) => module.default),
  en: () => import('./dictionaries/en.json').then((module) => module.default),
}

export type Locale = keyof typeof dictionaries
export type Dictionary = Awaited<ReturnType<typeof getDictionary>>

export const locales: Locale[] = ['th', 'en']
export const defaultLocale: Locale = 'th'

export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries

export const getDictionary = async (locale: Locale) => dictionaries[locale]()

