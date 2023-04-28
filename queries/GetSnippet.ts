export default function GetPost(slug: string) {
  return `query GetSnippet {
  snippet(where: {slug: "${slug}"}) {
    id
    title
    slug
    tags
    image
    excerpt
    content { markdown }
    updatedAt
    publishedAt
    createdAt
  }
}`
}