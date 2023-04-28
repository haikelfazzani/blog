import { useState } from "preact/hooks";

export default function ListTags({ section, tags }: { section: string | undefined, tags: string[] | undefined }) {

  if (!tags) return <></>

  const [show, setShow] = useState(false)

  const onToggle = () => {
    setShow(!show)
  }

  return <ul class="d-flex flex-wrap">
    <li class="tag bg-transparent bordered mr-1 mb-1 cp"><a href={`/portfolio/${section}?tag=all`} title="Show all projects">all</a></li>
    {tags.slice(0, show ? tags.length : 5).map((t: string, i: number) => <li class="tag mr-1 mb-1 cp" key={i}>
      <a href={`/portfolio/${section}?tag=${t}`}>{t}</a>
    </li>)}
    <li class="mr-1 mb-1 cp bg-transparent bordered">
      <button class="tag bg-transparent border-0 white cp" onClick={onToggle} title={show ? "Show less" : "Show more"}>
        <i class={"fa fa-arrow-" + (show ? "up" : "down")}></i>
      </button>
    </li>
  </ul>
}
