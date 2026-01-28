import { defineType, defineField } from 'sanity'

export const resource = defineType({
  name: 'resource',
  title: 'Resources & Downloads',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'resourceType',
      title: 'Resource Type',
      type: 'string',
      options: {
        list: [
          { title: 'Whitepaper', value: 'whitepaper' },
          { title: 'eBook', value: 'ebook' },
          { title: 'Case Study', value: 'case-study' },
          { title: 'Guide', value: 'guide' },
          { title: 'Webinar', value: 'webinar' },
          { title: 'Video', value: 'video' },
          { title: 'Infographic', value: 'infographic' },
          { title: 'Datasheet', value: 'datasheet' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail Image',
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
    }),
    defineField({
      name: 'file',
      title: 'Downloadable File',
      type: 'file',
      description: 'Upload PDF, document, or other downloadable file',
    }),
    defineField({
      name: 'externalUrl',
      title: 'External URL',
      type: 'url',
      description: 'Link to external resource (e.g., webinar registration)',
    }),
    defineField({
      name: 'gated',
      title: 'Gated Content',
      type: 'boolean',
      description: 'Require email capture before download',
      initialValue: true,
    }),
    defineField({
      name: 'featured',
      title: 'Featured Resource',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Cyber Security', value: 'cyber-security' },
          { title: 'Cloud Backup', value: 'cloud-backup' },
          { title: 'Compliance', value: 'compliance' },
          { title: 'Data Protection', value: 'data-protection' },
          { title: 'Disaster Recovery', value: 'disaster-recovery' },
        ],
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          validation: (Rule) => Rule.max(60),
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.max(160),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'resourceType',
      media: 'thumbnail',
    },
  },
})
