import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

// Configuration
const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
}

// Create client for fetching data
export const client = createClient({
  ...config,
  perspective: 'published',
})

// Create preview client for draft content
export const previewClient = createClient({
  ...config,
  useCdn: false,
  perspective: 'previewDrafts',
  token: process.env.SANITY_API_READ_TOKEN,
})

// Helper to get appropriate client
export const getClient = (preview = false) => (preview ? previewClient : client)

// Image URL builder
const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Helper for generating image URLs with common options
export function getImageUrl(
  source: SanityImageSource,
  options: {
    width?: number
    height?: number
    quality?: number
    format?: 'webp' | 'jpg' | 'png'
  } = {}
): string {
  let imageBuilder = builder.image(source)

  if (options.width) {
    imageBuilder = imageBuilder.width(options.width)
  }
  if (options.height) {
    imageBuilder = imageBuilder.height(options.height)
  }
  if (options.quality) {
    imageBuilder = imageBuilder.quality(options.quality)
  }
  if (options.format) {
    imageBuilder = imageBuilder.format(options.format)
  }

  return imageBuilder.url()
}

// Types for query options
export type QueryOptions = {
  preview?: boolean
  cache?: RequestCache
  next?: { revalidate?: number | false; tags?: string[] }
}

// Generic fetch function with error handling
export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
  options: QueryOptions = {}
): Promise<T> {
  const { preview = false, cache, next } = options
  const selectedClient = getClient(preview)

  try {
    const result = await selectedClient.fetch<T>(query, params, {
      cache,
      next,
    })
    return result
  } catch (error) {
    console.error('Sanity fetch error:', error)
    throw error
  }
}

export default client
