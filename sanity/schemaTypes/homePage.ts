import { defineType, defineField } from 'sanity'
import { HomeIcon } from '@sanity/icons'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
        }),
        defineField({
          name: 'subheading',
          title: 'Subheading',
          type: 'string',
        }),
        defineField({
          name: 'primaryCtaText',
          title: 'Primary CTA Text',
          type: 'string',
          description: 'Main call-to-action button label',
        }),
        defineField({
          name: 'primaryCtaLink',
          title: 'Primary CTA Link',
          type: 'string',
          description: 'Relative path (e.g. /contact) or full URL',
        }),
        defineField({
          name: 'secondaryCtaText',
          title: 'Secondary CTA Text',
          type: 'string',
          description: 'Secondary call-to-action button label',
        }),
        defineField({
          name: 'secondaryCtaLink',
          title: 'Secondary CTA Link',
          type: 'string',
          description: 'Relative path (e.g. /services) or full URL',
        }),
      ],
    }),
    defineField({
      name: 'welcomeHeading',
      title: 'Welcome Heading',
      type: 'string',
    }),
    defineField({
      name: 'welcomeText',
      title: 'Welcome Text',
      type: 'text',
      rows: 5,
    }),
  ],
})
