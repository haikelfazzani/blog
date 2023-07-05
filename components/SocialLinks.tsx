import ExternalLink from "./ExternalLink.tsx";

const links = [
  {
    href: "https://www.youtube.com/@HaikelFazzanii",
    img: "https://i.ibb.co/QKXmqmL/youtube.png",
    title: "Youtube"
  },
  {
    href: "https://twitter.com/HaikelFazzani",
    img: "https://i.ibb.co/TKB3Z2H/twitter-46x38-2x.png",
    title: "Twitter"
  },
  {
    href: "https://www.instagram.com/haikel.fazzani",
    img: "https://static.cdninstagram.com/rsrc.php/v3/yB/r/-7Z_RkdLJUX.png",
    title: "Instagram"
  },
  {
    href: "https://www.tiktok.com/@haikel.fazzani",
    img: "https://assets.stickpng.com/images/62012ee14babde0004ca4177.png",
    title: "Tiktok"
  }
];

export default function ShareSocial({ clx = "social d-flex justify-center align-center flex-wrap mt-2 mb-2", showAsCard = false }) {
  return <div class={clx}>
    {links.map((s, i) => <ExternalLink
      key={i}
      clx={showAsCard ? 'w-100 card p-2 center' : ''}
      href={s.href}
      title={s.title}>
      <img class="mx-auto" width="35" src={s.img} alt={s.title} loading="lazy" />
      {showAsCard && <small class="mt-2">{s.title}</small>}
    </ExternalLink>)}
  </div>
}
