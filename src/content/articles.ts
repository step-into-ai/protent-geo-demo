import generatedArticles from './generated-articles.json'

export type ArticleFaq = { question: string; answer: string; answerHtml: string }
export type Article = {
  slug: string
  path: string
  hubPath: '/faltzelte' | '/messestaende' | '/promotion-event' | '/bedruckung' | '/ausstattung'
  title: string
  metaTitle: string
  description: string
  canonical: string
  cluster: string
  approvalStatus: 'draft' | 'published'
  sourceUrls: string[]
  relatedSlugs: string[]
  internalSlugs: string[]
  directAnswer: string
  directAnswerHtml: string
  bodyHtml: string
  faqs: ArticleFaq[]
}

export const articles = generatedArticles as Article[]
export const articleBySlug = new Map(articles.map(article => [article.slug, article]))

if (articles.length !== 25 || articleBySlug.size !== 25) throw new Error('Die öffentliche Wissensbasis muss genau 25 eindeutige Artikel enthalten.')
