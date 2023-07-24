import DevLinks from "../components/DevLinks.tsx";
import { Head } from "$fresh/runtime.ts";
import SocialLinks from "../components/SocialLinks.tsx";

export default function contact() {
  return (
    <main class="overflow">
      <Head>
        <title>Contact | Haikel Fazzani</title>
        <meta itemProp="image" content="https://i.ibb.co/SwqxSc0/Screenshot-2023-07-13-10-55-26.png"></meta>
        <meta itemProp="author" content="Haikel Fazzani" />
        <link rel="canonical" href={Deno.env.get("BASE_URL_WEBSITE") +"/contact"} />
      </Head>

      <h1>CONTACT</h1>
      <p>Thanks For Your Interest In Getting In Touch!</p>
      <p>The best way to reach me is by email at <span class="green"><i class="fas fa-envelope mr-1"></i>haikel.fazzani@zoho.com</span></p>

      <p>Whether you have a question about one of my talks or blog posts, or want to discuss working together, I'm happy to get your email.</p>

      <h2 class="mt-5 mb-2 text-4"><i class="fa fa-link mr-1"></i>Dev Links</h2>
      <DevLinks clx="grid-6" showAsCard={true} />

      <h2 class="mt-5 mb-2 text-4"><i class="fa fa-link mr-1"></i>Social Links</h2>
      <SocialLinks clx="grid-6" showAsCard={true} />
    </main>
  )
}
