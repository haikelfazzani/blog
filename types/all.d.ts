export type BlogPost = {
  title: string
  slug: string
  tags: string[]
  image: string
  keywords?: string
  excerpt: string
  content: { markdown: string }
  updatedAt: string
  publishedAt: string
  createdAt: string
}

export type BlogPatialPost = {
  id?: string
  title: string
  slug: string
  excerpt: string
  tags: string[]
  image: string
  keywords?: string
  date: string
}

export type Project = {
  title: string
  slug: string
  tags: string
  description: string
  images: string[]
  repository?: string
  website?: string
  firefox?: string
  edge?: string
  dev_tools?: string[]
}

export type ProjectPatial = {
  name: string
  section: string
  count: number
  icon: string
}
