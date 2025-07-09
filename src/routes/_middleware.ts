import { define } from "../utils/define.ts";

export const handler = define.middleware(async (ctx) => {
  const res = await ctx.next();
  console.log(`${ctx.req.method} ${ctx.req.url} ${res.status}`);
  return res;
});
