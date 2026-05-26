import { type SchemaTypeDefinition } from 'sanity'
import { siteSettings } from './siteSettings'
import { homePage } from './homePage'
import { service } from './service'
import { page } from './page'
import { navItem } from './navItem'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, homePage, service, page, navItem],
}
