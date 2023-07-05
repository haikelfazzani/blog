import ExternalLink from "./ExternalLink.tsx";

const links = [
  {
    href: "https://github.com/haikelfazzani",
    img: "https://github.githubassets.com/favicons/favicon.svg",
    title: "Github"
  },
  {
    href: "https://gitlab.com/haikelfazzani",
    img: "https://i.ibb.co/cyPGLnG/gitlab.png",
    title: "Gitlab"
  },
  {
    href: "https://www.codewars.com/users/Haikel",
    img: "https://i.ibb.co/WtN5cpf/codewars.jpg",
    title: "Codewars"
  },
  {
    href: "https://app.codesignal.com/profile/haikel",
    img: "https://i.ibb.co/F0843f9/codesignal.png",
    title: "Codesignal"
  },
  {
    href: "https://leetcode.com/haikel",
    img: "https://i.ibb.co/wcs3HJw/leetcode-32x32.png",
    title: "Leetcode"
  }
];

export default function DevLinks({ clx = "social d-flex justify-center align-center flex-wrap mt-2 mb-2", showAsCard = false }) {
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
