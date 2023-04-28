#!/usr/bin/env -S deno run -A --watch=static/,routes/

import dev from "$fresh/dev.ts";
import "https://deno.land/std@0.162.0/dotenv/load.ts";

await dev(import.meta.url, "./main.ts");
