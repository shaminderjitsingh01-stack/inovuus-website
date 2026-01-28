import { defineType, defineField } from 'sanity'

export const partner = defineType({
  name: 'partner',
  title: 'Partner',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Partner Name',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logoDark',
      title: 'Logo (Dark Mode)',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Optional alternative logo for dark mode',
    }),
    defineField({
      name: 'url',
      title: 'Website URL',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'partnerType',
      title: 'Partner Type',
      type: 'string',
      options: {
        list: [
          { title: 'Technology Partner', value: 'technology' },
          { title: 'Strategic Partner', value: 'strategic' },
          { title: 'Integration Partner', value: 'integration' },
          { title: 'Channel Partner', value: 'channel' },
          { title: 'Client', value: 'client' },
        ],
      },
      initialValue: 'technology',
    }),
    defineField({
      name: 'tier',
      title: 'Partnership Tier',
      type: 'string',
      options: {
        list: [
          { title: 'Platinum', value: 'platinum' },
          { title: 'Gold', value: 'gold' },
          { title: 'Silver', value: 'silver' },
          { title: 'Bronze', value: 'bronze' },
        ],
      },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
      description: 'Show in featured partners section',
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Name',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'partnerType',
      media: 'logo',
    },
    prepare({ title, subtitle, media }) {
      const typeLabels: Record<string, string> = {
        technology: 'Technology Partner',
        strategic: 'Strategic Partner',
        integration: 'Integration Partner',
        channel: 'Channel Partner',
        client: 'Client',
      }
      return {
        title,
        subtitle: subtitle ? typeLabels[subtitle] || subtitle : '',
        media,
      }
    },
  },
})

export type Partner = {
  _id: string
  _type: 'partner'
  name: string
  logo: {
    asset: {
      _ref: string
      url: string
    }
    alt?: string
  }
  logoDark?: {
    asset: {
      _ref: string
      url: string
    }
  }
  url?: string
  description?: string
  partnerType: 'technology' | 'strategic' | 'integration' | 'channel' | 'client'
  tier?: 'platinum' | 'gold' | 'silver' | 'bronze'
  order: number
  featured: boolean
  isActive: boolean
}
