export interface IWebSeo {
  title: string
  description: string
  primaryKeyword: Array<string>
  secondaryKeyword: Array<string>
  imgAlt: string
  applicationId: Record<any, any>,
  routes: string
  socialImage: string
}

export interface IWebContent {
  title: string
  subTitle: string
  serviceName: string
  serviceNameAlt: string
  article: string
  prices: Array<{
    type: string
    value: string
  }>
  hooks: string
  article2: string
  images: Array<string>
  faq: Array<{
    question: string
    answer: string
  }>
}