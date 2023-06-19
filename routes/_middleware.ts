import { MiddlewareHandlerContext } from "$fresh/server.ts";
import SecurityHeaders from "../utils/securityHeaders.ts";

const isDevMode = Deno.env.get('MODE') === 'dev';
const devPaths = ['_frsh/alive', '_frsh/refresh.js'];

type Client = {
  count: number
  windowStart: number
  reputation: number
}

const clientsMap = new Map<string, Client>();

const rateLimitOptions = {
  windowMs: 60000,
  max: isDevMode ? 150 : 50,
  message: 'Too Many Requests',
  keyGenerator: (ctx: MiddlewareHandlerContext<{ data: string }>) => {
    const { hostname } = ctx.remoteAddr as Deno.NetAddr;
    return hostname;
  }
};

function rateLimit(_req: Request, ctx: MiddlewareHandlerContext<{ data: string }>) {
  const ip = rateLimitOptions.keyGenerator(ctx);

  if (!clientsMap.has(ip)) clientsMap.set(ip, { count: 0, windowStart: Date.now(), reputation: 0 });

  const client: Client = clientsMap.get(ip) as Client;

  if (client.count >= rateLimitOptions.max) {
    if (Date.now() - client.windowStart < rateLimitOptions.windowMs) {
      const response = new Response(rateLimitOptions.message, { status: 429 });
      return response
    }

    client.reputation += 1;
    client.count = 0;
    client.windowStart = Date.now();
  }

  client.count += 1;
  return ctx.next();
}

async function secH(req: Request, ctx: MiddlewareHandlerContext<{ data: string }>) {
  const resp = await ctx.next();
  const { pathname } = new URL(req.url); // /favicon.ico
  
  if (isDevMode && devPaths.some(p => pathname.includes(p))) return resp;
  else {
    const cachedExtensions = ['.webp', '.png', '.svg', '.ico', '.jpg', '.jpeg', 'prism.css'];
    SecurityHeaders.forEach((header) => resp.headers.set(header.key, header.value));

    if (pathname.startsWith('/api')) {
      resp.headers.append("Access-Control-Allow-Methods", "GET,POST")
    }

    if (/(privacy-policy)\/\w+-?\w+/gi.test(pathname) || cachedExtensions.some(c => pathname.endsWith(c))) {
      resp.headers.append('Cache-Control', 'public, s-maxage=592200, max-age=592200, stale-while-revalidate=84600');
    }
    else {
      resp.headers.append('Cache-Control', 'public, s-maxage=84600, max-age=84600, stale-while-revalidate=3600');
    }

    resp.headers.delete('x-powered-by');
    return resp;
  }
}

export const handler = isDevMode ? [rateLimit] : [rateLimit, secH];