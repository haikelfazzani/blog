import Meta from "../components/Meta.tsx";

export default function about() {
  return (
    <main class="overflow">
      <Meta>
        <title>About | Haikel Fazzani</title>
        <meta name="description" content="A few highlights of Haikel Fazzani snippets" />
        <meta name="keywords" content="about,fullstacj,developer,javascript,linux" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${Deno.env.get("BASE_URL_WEBSITE")}/about`} />
        <meta property="og:title" content="About | Haikel Fazzani" />
        <meta property="og:description" content="Hey! my name is Haikel Fazzani from Tunisia, i am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations." />
        <meta property="og:image" content="https://i.ibb.co/SwqxSc0/Screenshot-2023-07-13-10-55-26.png" />
      </Meta>

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
    </main>
  )
}
