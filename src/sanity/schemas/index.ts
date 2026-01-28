import { page } from './page'
import { hero } from './hero'
import { solution } from './solution'
import { testimonial } from './testimonial'
import { blogPost } from './blogPost'
import { quiz } from './quiz'
import { quizResult } from './quizResult'
import { teamMember } from './teamMember'
import { partner } from './partner'
import { siteSettings } from './siteSettings'
import { resource } from './resource'
import { newsletterSubscriber, newsletterCampaign } from './newsletter'

export const schemaTypes = [
  // Documents
  page,
  hero,
  solution,
  testimonial,
  blogPost,
  quiz,
  quizResult,
  teamMember,
  partner,
  siteSettings,
  resource,
  newsletterSubscriber,
  newsletterCampaign,
]

// Re-export types
export type { Page } from './page'
export type { Hero, HeroCTA } from './hero'
export type { Solution } from './solution'
export type { Testimonial } from './testimonial'
export type { BlogPost } from './blogPost'
export type { Quiz, QuizQuestion, QuizOption } from './quiz'
export type { QuizResult, QuizResultCTA, QuizResultRecommendation } from './quizResult'
export type { TeamMember } from './teamMember'
export type { Partner } from './partner'
export type {
  SiteSettings,
  SiteSettingsAddress,
  SiteSettingsSocialLinks,
  SiteSettingsSEO,
  SiteSettingsAnalytics,
  SiteSettingsFooter,
} from './siteSettings'
