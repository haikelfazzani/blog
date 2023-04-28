export default function GetPosts() {
  return `query GetPosts {
  posts(first: 10, orderBy: date_DESC) {
    title
    slug
    tags 
    image
    excerpt
    date
  }
}`
}