import { defineType, defineField } from 'sanity'

export const quizResult = defineType({
  name: 'quizResult',
  title: 'Quiz Result',
  type: 'document',
  fields: [
    defineField({
      name: 'minScore',
      title: 'Minimum Score',
      type: 'number',
      validation: (Rule) => Rule.required().integer().min(0),
      description: 'Minimum score (inclusive) to show this result',
    }),
    defineField({
      name: 'maxScore',
      title: 'Maximum Score',
      type: 'number',
      validation: (Rule) => Rule.required().integer(),
      description: 'Maximum score (inclusive) to show this result',
    }),
    defineField({
      name: 'title',
      title: 'Result Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
      description: 'Title shown to the user (e.g., "Beginner", "Expert")',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().max(500),
      description: 'Detailed description of the result',
    }),
    defineField({
      name: 'image',
      title: 'Result Image',
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
      name: 'cta',
      title: 'Call to Action',
      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'Button Label',
          type: 'string',
          validation: (Rule) => Rule.required().max(50),
        }),
        defineField({
          name: 'url',
          title: 'URL',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'variant',
          title: 'Button Variant',
          type: 'string',
          options: {
            list: [
              { title: 'Primary', value: 'primary' },
              { title: 'Secondary', value: 'secondary' },
              { title: 'Outline', value: 'outline' },
            ],
          },
          initialValue: 'primary',
        }),
      ],
    }),
    defineField({
      name: 'recommendations',
      title: 'Recommendations',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'string',
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'string',
            }),
          ],
        },
      ],
      description: 'Optional recommendations based on this result',
    }),
    defineField({
      name: 'quiz',
      title: 'Associated Quiz',
      type: 'reference',
      to: [{ type: 'quiz' }],
      description: 'The quiz this result belongs to',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      minScore: 'minScore',
      maxScore: 'maxScore',
      media: 'image',
    },
    prepare({ title, minScore, maxScore, media }) {
      return {
        title,
        subtitle: `Score range: ${minScore} - ${maxScore}`,
        media,
      }
    },
  },
})

export type QuizResultCTA = {
  label: string
  url: string
  variant: 'primary' | 'secondary' | 'outline'
}

export type QuizResultRecommendation = {
  title: string
  description?: string
  link?: string
}

export type QuizResult = {
  _id: string
  _type: 'quizResult'
  minScore: number
  maxScore: number
  title: string
  description: string
  image?: {
    asset: {
      _ref: string
      url: string
    }
    alt?: string
  }
  cta?: QuizResultCTA
  recommendations?: QuizResultRecommendation[]
}
