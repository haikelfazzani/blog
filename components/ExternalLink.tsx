type IProp = {
  // deno-lint-ignore no-explicit-any
  children: any | null | undefined
  clx: string
  href: string
  title: string
}

export default function ExternalLink({ children, clx = "", href = "", title = "" }: Partial<IProp>) {
  if (href) {
    return <a
      class={clx}
      href={href}
      target="_blank"
      rel="external nofollow noopener"
      title={title}
      itemProp="url">
      {children || title}
    </a>
  }
  return <></>
}
