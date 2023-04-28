import ShareSocial from "./ShareSocial.tsx";
import Link from './Link.tsx';

export default function Footer() {
  return <footer class="mt-3 center">
  <ShareSocial />

  <ul class="d-flex flex-wrap justify-center align-center fs-sm light">
    <li><Link href="/">Home</Link></li>
    <li><Link className="ml-2 mr-2" href="/portfolio">Portfolio</Link></li>
    <li><Link href="/blog">Blog</Link></li>
    <li><Link className="ml-2 mr-2" href="/privacy">Privacy</Link></li>
    <li><Link href="/contact">Contact</Link></li>
  </ul>

  <small class="center">© 2023 Haikel Fazzani. All rights reserved.</small>
</footer>
}
