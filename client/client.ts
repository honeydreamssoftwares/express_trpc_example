import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server/approuter";



const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:4000/trpc",
    }),
  ],
});

async function main() {
  const bilbo = await client.getUser777.query("abc678")
  console.log(bilbo);
}

main();
