import { Head } from "$fresh/runtime.ts";

export default function about() {
  return (
    <main class="overflow">
      <Head>
        <title>About | Haikel Fazzani</title>
        <meta name="description" content="A few highlights of Haikel Fazzani snippets" />
        <meta name="keywords" content="network,network security,haikel,haikel fazzani,fazzani,software,engineer,web,about,fullstack,developer,javascript,linux" />
        <meta itemProp="image" content="https://i.ibb.co/SwqxSc0/Screenshot-2023-07-13-10-55-26.png"></meta>
        <meta itemProp="author" content="Haikel Fazzani" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${Deno.env.get("BASE_URL_WEBSITE")}/about`} />
        <meta property="og:title" content="About | Haikel Fazzani" />
        <meta property="og:description" content="Hey! my name is Haikel Fazzani from Tunisia, i am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations." />
        <meta property="og:image" content="https://i.ibb.co/SwqxSc0/Screenshot-2023-07-13-10-55-26.png" />
      </Head>

      <h1>About</h1>

      <section class="mb-3">
        <p>Hey! my name is Haikel Fazzani from Tunisia, i am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations.</p>
      </section>

      <section class="mb-3">
        <h2 class="m-0 mb-1 text-3">Network Programmer, Malware Analyst and FullStack developer</h2>
        <ul>
          <li><i class="fa fa-circle light mr-1"></i>Linux</li>
          <li><i class="fa fa-circle light mr-1"></i>React JS/Native</li>
          <li><i class="fa fa-circle light mr-1"></i>Typescript/ NodeJs/ Deno</li>
          <li><i class="fa fa-circle light mr-1"></i>Golang</li>
        </ul>
      </section>

      <section class="mb-3">
        <h2 class="m-0 mb-1 text-3">Education</h2>
        <ul>
          <li><i class="fas fa-user-graduate mr-1"></i>Professionnel Master in Network security</li>
          <li class="light">Higher Institute Of Computer Science of Ariana - ISI Ariana</li>
          <li><i class="fas fa-user-graduate mr-1"></i>License In Information Systems Development</li>
          <li class="light">Higher Institute of Technological Studies of Rades - ISET Rades</li>
        </ul>
      </section>

      <section class="mb-3">
        <h2 class="m-0 mb-1 text-3">Certifications</h2>
        <ul>
          <li><a href="https://www.skillfront.com/certifications/SkillFront-SFE016daf33e89da-67311133614675.pdf" target="_blank">
            <i class="fa fa-circle mr-1"></i>ISO/IEC 27001</a></li>
          <li><a href="/certifications/pwpc.pdf" target="_blank"><i class="fa fa-circle mr-1"></i>Remote Work Professional Certification</a></li>
          <li><a href="https://www.hackerrank.com/certificates/cbed23248326" target="_blank"><i class="fa fa-circle mr-1"></i>JavaScript (hackerrank) Certificate</a></li>
        </ul>
      </section>

      <div class="bg-green" data-iframe-width="150" data-iframe-height="270" data-share-badge-id="79aa61fd-5ed5-445b-8d19-8a6e0d5143d7"
        data-share-badge-host="https://www.credly.com"></div>
      <script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js">

      </script>

    </main>
  )
}
