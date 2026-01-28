import { groq } from 'next-sanity'

// ============================================
// Page Queries
// ============================================

export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug && isPublished == true][0] {
    _id,
    title,
    slug,
    description,
    "ogImage": ogImage.asset->url,
    content,
    isPublished
  }
`

export const allPagesQuery = groq`
  *[_type == "page" && isPublished == true] | order(title asc) {
    _id,
    title,
    slug,
    description
  }
`

// ============================================
// Hero Queries
// ============================================

export const heroByPageQuery = groq`
  *[_type == "hero" && page._ref == $pageId][0] {
    _id,
    headline,
    subheadline,
    ctas,
    "image": image {
      "url": asset->url,
      alt
    }
  }
`

export const heroQuery = groq`
  *[_type == "hero"][0] {
    _id,
    headline,
    subheadline,
    ctas,
    "image": image {
      "url": asset->url,
      alt
    }
  }
`

// ============================================
// Solution Queries
// ============================================

export const allSolutionsQuery = groq`
  *[_type == "solution"] | order(order asc) {
    _id,
    title,
    description,
    icon,
    "iconImage": iconImage.asset->url,
    link,
    order,
    featured
  }
`

export const featuredSolutionsQuery = groq`
  *[_type == "solution" && featured == true] | order(order asc) {
    _id,
    title,
    description,
    icon,
    "iconImage": iconImage.asset->url,
    link
  }
`

// ============================================
// Testimonial Queries
// ============================================

export const allTestimonialsQuery = groq`
  *[_type == "testimonial"] | order(order asc) {
    _id,
    quote,
    author,
    company,
    role,
    "image": image {
      "url": asset->url,
      alt
    },
    "companyLogo": companyLogo.asset->url,
    rating,
    featured
  }
`

export const featuredTestimonialsQuery = groq`
  *[_type == "testimonial" && featured == true] | order(order asc) {
    _id,
    quote,
    author,
    company,
    role,
    "image": image {
      "url": asset->url,
      alt
    },
    rating
  }
`

// ============================================
// Blog Post Queries
// ============================================

export const allBlogPostsQuery = groq`
  *[_type == "blogPost" && isPublished == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    "author": author->{
      name,
      "image": image.asset->url
    },
    categories,
    tags,
    publishedAt,
    "featuredImage": featuredImage {
      "url": asset->url,
      alt
    },
    readingTime,
    featured
  }
`

export const blogPostBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug && isPublished == true][0] {
    _id,
    title,
    slug,
    excerpt,
    body,
    "author": author->{
      _id,
      name,
      role,
      bio,
      "image": image.asset->url,
      linkedin
    },
    categories,
    tags,
    publishedAt,
    "featuredImage": featuredImage {
      "url": asset->url,
      alt
    },
    readingTime
  }
`

export const featuredBlogPostsQuery = groq`
  *[_type == "blogPost" && isPublished == true && featured == true] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    excerpt,
    "author": author->{
      name,
      "image": image.asset->url
    },
    publishedAt,
    "featuredImage": featuredImage {
      "url": asset->url,
      alt
    },
    readingTime
  }
`

export const blogPostsByCategoryQuery = groq`
  *[_type == "blogPost" && isPublished == true && $category in categories] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    "author": author->{
      name,
      "image": image.asset->url
    },
    categories,
    publishedAt,
    "featuredImage": featuredImage {
      "url": asset->url,
      alt
    },
    readingTime
  }
`

export const recentBlogPostsQuery = groq`
  *[_type == "blogPost" && isPublished == true] | order(publishedAt desc)[0...$limit] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    "featuredImage": featuredImage {
      "url": asset->url,
      alt
    },
    readingTime
  }
`

// ============================================
// Quiz Queries
// ============================================

export const quizBySlugQuery = groq`
  *[_type == "quiz" && slug.current == $slug && isActive == true][0] {
    _id,
    title,
    slug,
    description,
    questions,
    completionMessage
  }
`

export const allQuizzesQuery = groq`
  *[_type == "quiz" && isActive == true] | order(title asc) {
    _id,
    title,
    slug,
    description,
    "questionCount": count(questions)
  }
`

export const quizResultsQuery = groq`
  *[_type == "quizResult" && quiz._ref == $quizId] | order(minScore asc) {
    _id,
    minScore,
    maxScore,
    title,
    description,
    "image": image {
      "url": asset->url,
      alt
    },
    cta,
    recommendations
  }
`

export const quizResultByScoreQuery = groq`
  *[_type == "quizResult" && quiz._ref == $quizId && minScore <= $score && maxScore >= $score][0] {
    _id,
    title,
    description,
    "image": image {
      "url": asset->url,
      alt
    },
    cta,
    recommendations
  }
`

// ============================================
// Team Member Queries
// ============================================

export const allTeamMembersQuery = groq`
  *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    slug,
    role,
    bio,
    "image": image {
      "url": asset->url,
      alt
    },
    linkedin,
    twitter,
    email,
    department,
    featured
  }
`

export const teamMemberBySlugQuery = groq`
  *[_type == "teamMember" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    role,
    bio,
    fullBio,
    "image": image {
      "url": asset->url,
      alt
    },
    linkedin,
    twitter,
    email,
    department
  }
`

export const featuredTeamMembersQuery = groq`
  *[_type == "teamMember" && featured == true] | order(order asc) {
    _id,
    name,
    slug,
    role,
    bio,
    "image": image {
      "url": asset->url,
      alt
    },
    linkedin
  }
`

export const teamMembersByDepartmentQuery = groq`
  *[_type == "teamMember" && department == $department] | order(order asc) {
    _id,
    name,
    slug,
    role,
    bio,
    "image": image {
      "url": asset->url,
      alt
    },
    linkedin
  }
`

// ============================================
// Partner Queries
// ============================================

export const allPartnersQuery = groq`
  *[_type == "partner" && isActive == true] | order(order asc) {
    _id,
    name,
    "logo": logo {
      "url": asset->url,
      alt
    },
    "logoDark": logoDark.asset->url,
    url,
    description,
    partnerType,
    tier,
    featured
  }
`

export const featuredPartnersQuery = groq`
  *[_type == "partner" && isActive == true && featured == true] | order(order asc) {
    _id,
    name,
    "logo": logo {
      "url": asset->url,
      alt
    },
    url
  }
`

export const partnersByTypeQuery = groq`
  *[_type == "partner" && isActive == true && partnerType == $type] | order(order asc) {
    _id,
    name,
    "logo": logo {
      "url": asset->url,
      alt
    },
    url,
    description,
    tier
  }
`

// ============================================
// Site Settings Queries
// ============================================

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    _id,
    siteName,
    siteTagline,
    "logo": logo {
      "url": asset->url,
      alt
    },
    "logoDark": logoDark.asset->url,
    "favicon": favicon.asset->url,
    contactEmail,
    supportEmail,
    phone,
    address,
    socialLinks,
    seo {
      metaTitle,
      metaDescription,
      "ogImage": ogImage.asset->url
    },
    analytics,
    footer
  }
`

// ============================================
// Utility Queries
// ============================================

export const slugsQuery = (type: string) => groq`
  *[_type == "${type}" && defined(slug.current)][].slug.current
`

export const searchQuery = groq`
  *[_type in ["page", "blogPost", "solution"] && (
    title match $searchTerm ||
    description match $searchTerm ||
    excerpt match $searchTerm
  )] | order(_score desc) {
    _id,
    _type,
    title,
    "slug": slug.current,
    "excerpt": coalesce(excerpt, description)
  }[0...20]
`
