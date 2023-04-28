import { useState } from "preact/hooks";
import { Comment } from "../components/DiscussionEmbed.tsx";

type DisqusProp = {
  title: string
  identifier: string
}

export default function Disqus({ title, identifier }: DisqusProp) {

  const [isOpen, setisOpen] = useState(false)

  return (
    <div class="w-100 mt-2">
      {isOpen
        ? <Comment
          title={title}
          identifier={identifier.toLowerCase().replace(/\s+/g, '-')}
          url={`http://localhost:8000/blog/${identifier}`}
          shortname="haikel-fazzani-1"
        />
        : <button class="w-100 btn bg-dark" onClick={() => { setisOpen(!isOpen) }}><i class="fa fa-comments mr-1"></i>show comments</button>}
    </div>
  )
}
