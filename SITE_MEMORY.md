# iNovuus Website - Site Memory

**Last Updated:** February 5, 2026
**Live URL:** https://inovuus-website.vercel.app
**Sanity Studio:** https://inovuus-website.vercel.app/studio

---

## Site Overview

**Business:** iNovuus Technologies - Singapore's trusted data protection partner since 2000
**Primary Partner:** Druva (cloud-native data protection)
**Tech Stack:** Next.js 14, Sanity CMS, Tailwind CSS, Framer Motion

---

## Page Structure

### 1. Homepage (`/`)
**Sections:**
- **Hero** - "Achieve Unstoppable Cyber Resilience" with animated shield visualization
  - Badge: "Cloud-Native Data Protection"
  - CTAs: "Watch Product Tour" (video modal), "Get Free Assessment" (quiz)
  - Video: Wistia embed (product tour)
- **TrustBar** - Partner logos (from Sanity)
- **Solutions** - 4 solution cards (from Sanity)
- **Stats** - Key metrics (from Sanity siteSettings)
- **Features** - Static feature grid
- **Testimonials** - Client quotes (from Sanity)
- **CTA** - "Ready to Get Started?" section

### 2. About Page (`/about`)
**Content:**
- Hero: "Singapore's Trusted Data Protection Partner Since 2000"
- Mission Statement card
- **Our Values** (4 cards):
  - Security First
  - Excellence
  - Partnership
  - Innovation
- **Timeline/Journey** (milestones):
  - 2000: Founded
  - 2010: Cloud solutions
  - 2015: Druva partnership
  - 2020: 20 years celebration
  - 2024: Cyber Resilience initiative
  - 2025: 500+ clients
- **Strategic Partners**: Druva, AWS, Microsoft, VMware (SVG logos)

### 3. About - Team (`/about/team`)
- Team members grid (from Sanity)
- Each member: name, role, bio, image, LinkedIn

### 4. About - Partners (`/about/partners`)
**Content:**
- Hero: "Strategic Technology Partnerships"
- **Featured Partner** (Druva): Large highlight card
  - Premier Partner badge
  - Benefits list with checkmarks
- **Technology Partners** (3 cards): AWS, Microsoft, VMware
- **Partnership Benefits** (3 cards):
  - Access to Expertise
  - Co-Marketing Opportunities
  - Business Growth
- **Become a Partner** CTA section

### 5. Solutions Page (`/solutions`)
**4 Solution Cards:**
1. **Cyber Resilience & Ransomware Recovery**
   - Features: Automated detection, clean recovery, air-gapped backups, threat hunting
   - Link: `/solutions/ransomware-recovery`
2. **Cloud Backup & DRaaS**
   - Features: Zero hardware, elastic scaling, global deduplication, one-click DR
   - Link: `/solutions/cloud-backup`
3. **SaaS Application Protection**
   - Features: M365, Salesforce, Google Workspace, automated compliance
   - Link: `/solutions/saas-protection`
4. **Data Governance & Compliance**
   - Features: GDPR, eDiscovery, data residency, audit reporting
   - Link: `/solutions/compliance`

### 6. Solution Subpages
- `/solutions/cyber-resilience`
- `/solutions/cloud-backup`
- `/solutions/compliance`
- `/solutions/data-center`

### 7. Platform Page (`/platform`)
**Content:**
- Hero: "The Druva Cloud Platform" - unified dashboard
- **Platform Overview** card with features:
  - Centralized management
  - Real-time visibility
  - Automated policies
  - Global deduplication
- **3 Product Cards:**
  1. Data Center Protection (Druva Phoenix)
  2. Endpoint Protection (Druva inSync)
  3. Cloud Workload Protection (AWS & Azure Native)

### 8. Resources Page (`/resources`)
- Resource library (from Sanity)
- Types: Whitepapers, Webinars, Case Studies
- Filter by type

### 9. Resources - Blog (`/resources/blog`)
- Blog posts grid (from Sanity)
- Featured image, title, excerpt, author, date

### 10. Quiz Page (`/quiz`)
**Content:**
- "Ransomware Resilience Quiz"
- "Find your recovery readiness score in 60 seconds"
- Interactive quiz component (from Sanity)
- Results with recommendations and CTAs

### 11. Contact Page (`/contact`)
**Layout:** 2-column (info cards + form)
**Contact Info Cards:**
- Office Location: Singapore Business Hub
- Phone: +65 6123 4567
- Email: contact@inovuus.com
- Business Hours: Mon-Fri 9AM-6PM

**Form Fields:**
- Full Name (required)
- Email Address (required)
- Company Name
- Phone Number
- Message (required)

---

## Global Components

### Navbar
**Structure:**
- Logo: "iNovuus" (i in white, Novuus in accent)
- **Mega Menu Dropdowns:**
  1. **Solutions** - 4 items + featured (Quiz)
  2. **Platform** - 4 items + featured (Why Druva comparison)
  3. **Resources** - 4 items + featured (2025 Ransomware Playbook)
  4. **Company** - 4 items + featured (Schedule Consultation)
- CTA Button: "Get Assessment" → `/quiz`

### Footer
**Sections:**
1. **Newsletter Signup** - email input + subscribe
2. **Links Grid** (4 columns):
   - Solutions: Cyber Resilience, Cloud Backup, Compliance, Data Center
   - Resources: Platform Overview, Blog, Resources Library, Resilience Quiz
   - Company: About Us, Our Team, Partners, Contact
   - Connect: Book Consultation, Emergency Support, Get Assessment
3. **Bottom Bar:**
   - Logo + Copyright
   - Social Icons: LinkedIn, X, YouTube

---

## Design System

### Colors (Tailwind)
- `brand-dark`: Deep navy background (#0A192F)
- `brand-navy`: Card backgrounds (#112240)
- `brand-accent`: Teal/cyan (#64FFDA)
- `brand-blue`: Secondary blue (#48C6EF)
- `brand-text`: Gray text
- `brand-text-light`: Light gray text
- `brand-slate`: Border/divider color

### Typography
- Headings: Bold, white
- Body: Gray (brand-text)
- Accent text: brand-accent

### Components
- **Card**: Rounded corners, navy background, subtle border
- **Button**: Primary (accent bg), Secondary (accent border)
- **SectionHeading**: Label + Title + optional Description

### Animations (Framer Motion)
- Page sections: Fade in + slide up on scroll
- Hero shield: Rotating hexagons, pulsing, floating particles
- Cards: Hover lift effect
- Timeline: Alternating slide in

---

## Sanity CMS Schema

### Content Types
1. **hero** - Homepage hero section
2. **solution** - Solution cards
3. **testimonial** - Client testimonials
4. **blogPost** - Blog articles
5. **quiz** - Quiz questions
6. **quizResult** - Quiz result tiers
7. **teamMember** - Team profiles
8. **partner** - Partner logos/info
9. **resource** - Downloads/webinars
10. **siteSettings** - Global settings (logo, contact, social, stats)
11. **page** - Generic pages

### Form Submissions (stored in Sanity)
- **quizLead** - Quiz completions
- **contactSubmission** - Contact form
- **newsletterSubscriber** - Email signups

---

## API Routes
- `POST /api/contact` - Contact form submission
- `POST /api/newsletter` - Newsletter signup
- `POST /api/quiz-lead` - Quiz lead capture

---

## Key URLs
- Homepage: `/`
- Quiz: `/quiz`
- Contact: `/contact`
- Solutions: `/solutions`
- Platform: `/platform`
- About: `/about`
- Team: `/about/team`
- Partners: `/about/partners`
- Blog: `/resources/blog`
- Resources: `/resources`
- Sanity Studio: `/studio`
