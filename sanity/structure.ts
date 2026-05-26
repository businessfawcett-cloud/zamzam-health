import type {StructureResolver} from 'sanity/structure'
import {CogIcon} from '@sanity/icons'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .id('siteSettingsSingleton')
        .title('Site Settings')
        .icon(CogIcon)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('globalSettings')
            .documentId('siteSettings')
        ),
      S.documentTypeListItem('homePage').title('Home Page'),
      S.documentTypeListItem('service').title('Service'),
    ])
