import { marked } from "marked";
// import Prism from 'prismjs';
import { useState } from "preact/hooks";

function throttle<Args extends unknown[]>(fn: (...args: Args) => void, cooldown: number) {
  let lastArgs: Args | undefined;

  const run = () => {
    if (lastArgs) {
      fn(...lastArgs);
      lastArgs = undefined;
    }
  };

  const throttled = (...args: Args) => {
    const isOnCooldown = !!lastArgs;

    lastArgs = args;

    if (isOnCooldown) {
      return;
    }

    // deno-lint-ignore no-window-prefix
    window.setTimeout(run, cooldown);
  };

  return throttled;
}

export default function Markdown(props: { data: string }) {
  const [progressW, setProgressW] = useState(0)

  const code = marked.parse(props.data);
    
  // console.log(code);

  // marked.setOptions({
  //   renderer: new marked.Renderer(),
  //   // highlight: (code, lang) => {
  //   //   return Prism.highlight(code, Prism.languages.javascript, 'javascript')
  //   // }
  // });

  // deno-lint-ignore no-explicit-any
  const onScroll = throttle((e: any) => {
    const height = e.target.scrollHeight - e.target.clientHeight;
    const percent = (e.target.scrollTop / height) * 100;
    setProgressW(percent);
  }, 500)

  return <>
    <div class="w-100 scroll-progress" style={{ width: progressW + '%' }}></div>
    <div onScroll={onScroll} class="markdown p-2 overflow" dangerouslySetInnerHTML={{ __html: code }}></div>
  </>
}
