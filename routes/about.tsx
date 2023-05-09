import Meta from "../components/Meta.tsx";

export default function about() {
  return (
    <main class="overflow">
      <Meta>
        <title>Haikel Fazzani | Linux, React/Native, Typescript, NodeJs and Go developer</title>
      </Meta>

      <h1>About</h1>

      <section class="mb-3">
          <h2 class="m-0 mb-1 text-3">FullStack developer</h2>
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
