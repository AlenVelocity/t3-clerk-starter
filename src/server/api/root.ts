import { createCallerFactory, createTRPCRouter, publicProcedure, protectedProcedure } from "@/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  // Example of a public procedure
  publicExample: publicProcedure.query(() => {
    return "This is a public query";
  }),

  // Example of a protected procedure
  protectedExample: protectedProcedure.query(({ ctx }) => {
    return `Hello, ${ctx.auth.userId}!`;
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
