import Meta from "../components/Meta.tsx";
import ShareSocial from "../components/ShareSocial.tsx";

export default function contact() {
  return (
    <main class="overflow">
      <Meta>
        <title>Contact | Haikel Fazzani</title>
        <link rel="canonical" href="https://haikel-fazzani.deno.dev/contact" />
      </Meta>

      <h1>CONTACT</h1>
      <p>Thanks For Your Interest In Getting In Touch!</p>
      <p>The best way to reach me is by email at <span class="green"><i class="fas fa-envelope mr-1"></i>haikel.fazzani@zoho.com</span></p>

      <p>Whether you have a question about one of my talks or blog posts, or want to discuss working together, I'm happy to get your email.</p>

      <h2 class="mt-5 mb-2 text-3"><i class="fa fa-link mr-1"></i>Social Links</h2>
      <ShareSocial clx="grid-6" showAsCard={true} />
    </main>
  )
}
