import { defineType, defineField } from 'sanity'

export const quiz = defineType({
  name: 'quiz',
  title: 'Quiz',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Quiz Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
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
      validation: (Rule) => Rule.max(300),
    }),
    defineField({
      name: 'questions',
      title: 'Questions',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'question',
          title: 'Question',
          fields: [
            defineField({
              name: 'text',
              title: 'Question Text',
              type: 'string',
              validation: (Rule) => Rule.required().max(300),
            }),
            defineField({
              name: 'helpText',
              title: 'Help Text',
              type: 'string',
              description: 'Optional clarification for the question',
            }),
            defineField({
              name: 'options',
              title: 'Options',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'option',
                  title: 'Option',
                  fields: [
                    defineField({
                      name: 'text',
                      title: 'Option Text',
                      type: 'string',
                      validation: (Rule) => Rule.required().max(200),
                    }),
                    defineField({
                      name: 'points',
                      title: 'Points',
                      type: 'number',
                      validation: (Rule) => Rule.required().integer(),
                      description: 'Points awarded for selecting this option',
                    }),
                  ],
                  preview: {
                    select: {
                      title: 'text',
                      points: 'points',
                    },
                    prepare({ title, points }) {
                      return {
                        title,
                        subtitle: `${points} points`,
                      }
                    },
                  },
                },
              ],
              validation: (Rule) => Rule.required().min(2).max(6),
            }),
            defineField({
              name: 'required',
              title: 'Required',
              type: 'boolean',
              initialValue: true,
            }),
          ],
          preview: {
            select: {
              title: 'text',
              options: 'options',
            },
            prepare({ title, options }) {
              return {
                title,
                subtitle: `${options?.length || 0} options`,
              }
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'results',
      title: 'Results',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'quizResult' }] }],
      description: 'Link quiz results based on score ranges',
    }),
    defineField({
      name: 'completionMessage',
      title: 'Completion Message',
      type: 'text',
      rows: 2,
      description: 'Message shown when quiz is completed',
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      questions: 'questions',
    },
    prepare({ title, questions }) {
      return {
        title,
        subtitle: `${questions?.length || 0} questions`,
      }
    },
  },
})

export type QuizOption = {
  text: string
  points: number
}

export type QuizQuestion = {
  text: string
  helpText?: string
  options: QuizOption[]
  required: boolean
}

export type Quiz = {
  _id: string
  _type: 'quiz'
  title: string
  slug: {
    current: string
  }
  description?: string
  questions: QuizQuestion[]
  results?: Array<{
    _ref: string
  }>
  completionMessage?: string
  isActive: boolean
}
