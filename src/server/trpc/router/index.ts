import { createTRPCRouter } from "@/server/trpc/trpc";
import { exampleRouter } from "./example";

export const appRouter = createTRPCRouter({
  example: exampleRouter,
});

export type AppRouter = typeof appRouter;
