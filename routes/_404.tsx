import Meta from "../components/Meta.tsx";

export default function NotFoundPage() {
  return <>
    <Meta>
      <title>404 Page not found | Haikel Fazzani</title>
    </Meta>

    <main>
      <h1 class="mb-0" style={{fontSize:'152px'}}>404</h1>
      <h3 class="mt-3">Page not found</h3>
      <p>It seems that you're lost in a perpetual black hole. Let us help guide you out and get you back home.</p>
      <a class="btn bg-dark mt-3" href="/"><i class="fa fa-home mr-2"></i>GO HOME</a>
    </main>
  </>
}