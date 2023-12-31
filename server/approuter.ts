import { initTRPC } from '@trpc/server';
import { z } from 'zod';

export const t = initTRPC.create();

export const appRouter = t.router({
  getUser777: t.procedure.input(z.string()).query((opts) => {
    opts.input; // string
    console.log("OPTS",opts);
    return { id: opts.input, name: 'Bilbo 66' };
  }),
  createUser: t.procedure
    .input(z.object({ name: z.string().min(5) }))
    .mutation(async (opts) => {
      // use your ORM of choice
      return "ok";
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;