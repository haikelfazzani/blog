export type BlogPost = {
  title: string
  slug: string
  tags: Array<string>
  image: string
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
  tags: Array<string>
  image: string
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