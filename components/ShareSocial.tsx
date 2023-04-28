import socialLinks from "../utils/socialLinks.ts";
import ExternalLink from "./ExternalLink.tsx";

export default function ShareSocial({ clx = "social d-flex justify-center align-center flex-wrap mt-2 mb-2", showAsCard = false }) {
  return <div class={clx}>
    {socialLinks.map((s, i) => <ExternalLink
      key={i}
      clx={showAsCard ? 'w-100 card p-2 center' : ''}
      href={s.href}
      title={s.title}>
      <img class="mx-auto" width="35" src={s.img} alt={s.title} loading="lazy" />
      {showAsCard && <small class="mt-2">{s.title}</small>}
    </ExternalLink>)}
  </div>
}
