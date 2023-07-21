import ExternalLink from "./ExternalLink.tsx";

const links = [
  {
    href: "www.youtube.com/@HaikelFazzanii",
    img: "i.ibb.co/QKXmqmL/youtube.png",
    title: "Youtube"
  },
  {
    href: "twitter.com/HaikelFazzani",
    img: "i.ibb.co/TKB3Z2H/twitter-46x38-2x.png",
    title: "Twitter"
  },
  {
    href: "www.instagram.com/haikel.fazzani",
    img: "static.cdninstagram.com/rsrc.php/v3/yB/r/-7Z_RkdLJUX.png",
    title: "Instagram"
  },
  {
    href: "www.tiktok.com/@haikel.fazzani",
    img: "sf-tb-sg.ibytedtos.com/obj/eden-sg/uhtyvueh7nulogpoguhm/tiktok-icon2.png",
    title: "Tiktok"
  }
];

export default function ShareSocial({ clx = "social d-flex justify-center align-center flex-wrap mt-2 mb-2", showAsCard = false }) {
  return <div class={clx}>
    {links.map((s, i) => <ExternalLink
      key={i}
      clx={showAsCard ? 'w-100 card p-2 center' : ''}
      href={'https://' + s.href}
      title={s.title}>
      <img class="mx-auto" width="35" src={'https://'+s.img} alt={s.title} loading="lazy" />
      {showAsCard && <small class="mt-2">{s.title}</small>}
    </ExternalLink>)}
  </div>
}
