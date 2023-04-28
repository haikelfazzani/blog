import { ComponentChildren } from "preact"

type ILink = {
  title?: string
  href?: string
  className?: string
  children?: ComponentChildren
}

export default function Link({ children, className, title, href = "" }: Partial<ILink>) {
  const pts = href.replace('-', ' ').split(/\//g);
  const name = title || pts[pts.length - 1];
  return <a href={href} title={name} class={className}>{children}</a>
}
