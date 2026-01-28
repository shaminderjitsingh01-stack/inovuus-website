import { defineType, defineField } from 'sanity'

export const quizLead = defineType({
  name: 'quizLead',
  title: 'Quiz Leads',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
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
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'score',
      title: 'Quiz Score',
      type: 'number',
    }),
    defineField({
      name: 'maxScore',
      title: 'Max Possible Score',
      type: 'number',
    }),
    defineField({
      name: 'resultTier',
      title: 'Result Tier',
      type: 'string',
      options: {
        list: [
          { title: 'Critical (0-39)', value: 'critical' },
          { title: 'At Risk (40-79)', value: 'at-risk' },
          { title: 'Resilient (80-100)', value: 'resilient' },
        ],
      },
    }),
    defineField({
      name: 'answers',
      title: 'Quiz Answers',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
            }),
            defineField({
              name: 'answer',
              title: 'Selected Answer',
              type: 'string',
            }),
            defineField({
              name: 'points',
              title: 'Points',
              type: 'number',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'status',
      title: 'Lead Status',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Contacted', value: 'contacted' },
          { title: 'Qualified', value: 'qualified' },
          { title: 'Converted', value: 'converted' },
          { title: 'Lost', value: 'lost' },
        ],
      },
      initialValue: 'new',
    }),
    defineField({
      name: 'notes',
      title: 'Internal Notes',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'source',
      title: 'Traffic Source',
      type: 'string',
      description: 'UTM source or referrer',
    }),
  ],
  orderings: [
    {
      title: 'Newest First',
      name: 'submittedAtDesc',
      by: [{ field: 'submittedAt', direction: 'desc' }],
    },
    {
      title: 'Score (High to Low)',
      name: 'scoreDesc',
      by: [{ field: 'score', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'email',
      subtitle: 'resultTier',
      score: 'score',
    },
    prepare({ title, subtitle, score }) {
      return {
        title: title || 'No email',
        subtitle: `${subtitle || 'Unknown'} - Score: ${score || 0}`,
      }
    },
  },
})
