export default function GetPosts() {
  return `query GetSnippets {
  snippets(first: 10, orderBy: date_DESC) {
    title
    slug
    tags 
    image
    excerpt
    date
  }
}`
}