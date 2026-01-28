import { defineType, defineField } from 'sanity'

export const solution = defineType({
  name: 'solution',
  title: 'Solution',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Icon name (e.g., "rocket", "shield", "chart") or SVG code',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'iconImage',
      title: 'Icon Image',
      type: 'image',
      description: 'Alternative: Upload an icon image instead of using icon name',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'Link Label',
          type: 'string',
          initialValue: 'Learn More',
        }),
        defineField({
          name: 'url',
          title: 'URL',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'isExternal',
          title: 'External Link',
          type: 'boolean',
          initialValue: false,
        }),
      ],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
      description: 'Lower numbers appear first',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
      description: 'Highlight this solution',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'iconImage',
    },
  },
})

export type Solution = {
  _id: string
  _type: 'solution'
  title: string
  description: string
  icon: string
  iconImage?: {
    asset: {
      _ref: string
      url: string
    }
  }
  link?: {
    label: string
    url: string
    isExternal: boolean
  }
  order: number
  featured: boolean
}
