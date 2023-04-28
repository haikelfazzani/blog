import { Head } from "$fresh/runtime.ts";
import { ComponentChild } from "preact";
import { BlogPost } from "../types/all.d.ts";

export default function Meta(props: { children?: ComponentChild, post?: BlogPost, isArticle?: boolean }) {

  // deno-lint-ignore no-explicit-any
  const seo: any = {
    author: 'Haikel Fazzani',
    description: props.post ? props.post.excerpt : 'Haikel Fazzani | Professionnel Master in Network security',
    keywords: props.post ? props.post.tags.join(',') : 'haikel fazzani, fazzani, master, engineer, portfolio, developer, software, JavaScript, python, nodejs, golang, security, pentesting, soc',
  }

  // deno-lint-ignore no-explicit-any
  const og: any = {
    title: props.post ? props.post.title : 'Haikel Fazzani',
    description: props.post ? props.post.excerpt : 'Haikel Fazzani | Professionnel Master in Network security',
    image: props.post ? props.post.image : 'https://i.ibb.co/MkBGVjw/challenge.png',
    site_name: 'Haikel Fazzani',
    creator: '@haikelfazzani',
    type: props.isArticle ? 'article' : 'website',
    url: '',
    locale: 'en_US',
  }

  return <Head key="1">    
    {props.children}
    {Object.keys(seo).map((key) => <meta name={key} content={seo[key]} />)}
    {Object.keys(og).map((key) => <meta name={'og:' + key} content={og[key]} />)}
    {Object.keys(og).map((key) => <meta name={'twitter:' + key} content={og[key]} />)}
  </Head>
}
