import { define } from "../utils/fresh.ts";

const accessLogger = define.middleware(async (ctx) => {
  const res = await ctx.next();
  console.log(`${ctx.req.method} ${ctx.req.url} ${res.status}`);
  return res;
});

export const handler = [
  accessLogger,
];
