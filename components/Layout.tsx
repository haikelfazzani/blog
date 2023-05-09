import { ComponentChild } from "preact";
import Link from "./Link.tsx";

function Nav() {
  return <nav class="align-center">
    <div class="p-2 border-bottom d-sm-none brand">
      <img src="/binary.webp" alt="logo" loading="lazy" />
      <div class="light mt-2">Haikel Fazzani</div>
    </div>

    <Link aria-label="Home" href="/" title="Home"><i class="fa fa-home mr-2"></i><span>Home</span></Link>
    <Link aria-label="About" href="/about" title="About"><i class="fa fa-info-circle mr-2"></i><span>About</span></Link>
    <Link aria-label="Portfolio" href="/portfolio"><i class="fas fa-shapes mr-2"></i><span>Portfolio</span></Link>
    <Link aria-label="Blog" href="/blog"><i class="fas fa-book mr-2"></i><span>Blog</span></Link>
    <Link aria-label="Snippets" href="/snippets"><i class="fas fa-laptop-code mr-2"></i><span>Snippets</span></Link>
    <Link aria-label="Contact" href="/contact"><i class="fas fa-paper-plane mr-2"></i><span>Contact</span></Link>
  </nav>
}

export function Main(props: { children: ComponentChild }) {
  return <main>{props.children}</main>
}

export function Layout(props: { children: ComponentChild }) {
  return <div id="root">{props.children}</div>
}

Layout.Nav = Nav;