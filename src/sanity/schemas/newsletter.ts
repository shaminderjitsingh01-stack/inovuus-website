import { defineType, defineField } from 'sanity'

export const newsletterSubscriber = defineType({
  name: 'newsletterSubscriber',
  title: 'Newsletter Subscribers',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'subscribedAt',
      title: 'Subscribed At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'source',
      title: 'Source',
      type: 'string',
      description: 'Where did they subscribe from?',
      options: {
        list: [
          { title: 'Footer Form', value: 'footer' },
          { title: 'Blog Page', value: 'blog' },
          { title: 'Resource Download', value: 'resource' },
          { title: 'Quiz Results', value: 'quiz' },
          { title: 'Contact Page', value: 'contact' },
          { title: 'Pop-up', value: 'popup' },
        ],
      },
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Active', value: 'active' },
          { title: 'Unsubscribed', value: 'unsubscribed' },
          { title: 'Bounced', value: 'bounced' },
        ],
      },
      initialValue: 'active',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
  ],
  preview: {
    select: {
      title: 'email',
      subtitle: 'subscribedAt',
    },
  },
})

export const newsletterCampaign = defineType({
  name: 'newsletterCampaign',
  title: 'Newsletter Campaigns',
  type: 'document',
  fields: [
    defineField({
      name: 'subject',
      title: 'Email Subject',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'preheader',
      title: 'Preheader Text',
      type: 'string',
      description: 'Preview text shown in email clients',
    }),
    defineField({
      name: 'content',
      title: 'Email Content',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    }),
    defineField({
      name: 'ctaButton',
      title: 'CTA Button',
      type: 'object',
      fields: [
        defineField({
          name: 'text',
          title: 'Button Text',
          type: 'string',
        }),
        defineField({
          name: 'url',
          title: 'Button URL',
          type: 'url',
        }),
      ],
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Draft', value: 'draft' },
          { title: 'Scheduled', value: 'scheduled' },
          { title: 'Sent', value: 'sent' },
        ],
      },
      initialValue: 'draft',
    }),
    defineField({
      name: 'scheduledFor',
      title: 'Scheduled For',
      type: 'datetime',
    }),
    defineField({
      name: 'sentAt',
      title: 'Sent At',
      type: 'datetime',
    }),
    defineField({
      name: 'targetTags',
      title: 'Target Subscriber Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Send to subscribers with these tags (leave empty for all)',
    }),
  ],
  preview: {
    select: {
      title: 'subject',
      subtitle: 'status',
    },
  },
})
