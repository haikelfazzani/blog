export default function GetPost(slug: string) {
  return `query GetPost {
  posts(where: {slug: "${slug}"}) {
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