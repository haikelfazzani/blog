// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/
// https://developer.okta.com/blog/2021/10/18/security-headers-best-practices

const isDevMode = Deno.env.get('DENO_ENV') && Deno.env.get('DENO_ENV') === 'dev';

const csp = `
media-src 'none';
upgrade-insecure-requests;
frame-src https://disqus.com; 
frame-ancestors 'none'; 
object-src 'none';
`;
// script-src 'unsafe-inline' https://disqus.com https://www.clarity.ms https://c.disquscdn.com 'strict-dynamic' https: http:;

// img-src 'self' https://i.ibb.co https://github.githubassets.com https://disqus.com https://c.disquscdn.com;

const allowOrigin = isDevMode
  ? 'http://localhost:8000'
  : 'https://haikel-fazzani.deno.dev';

const SecurityHeaders = [
  // The Content-Security-Policy header controls which resource the browser is allowed to load for the page.
  { key: "Content-Security-Policy", value: isDevMode ? '' : csp.replace(/\n/g, '').trim() },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
  { key: "Cross-Origin-Opener-Policy-Report-Only", value: "same-origin; report-to=\"default\"" },

  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },

  { key: "Access-Control-Max-Age", value: "3600" },
  { key: "Access-Control-Allow-Origin", value: allowOrigin },

  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-XSS-Protection", value: "1; mode=block" },
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },

  // { key: "Permissions-Policy", value: "accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=(), interest-cohort=()" },

  // First, the Strict-Transport-Security header forces the browser to communicate with HTTPS instead of HTTP
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },

  { key: "Server", value: "Hacking" },
];

export default SecurityHeaders;