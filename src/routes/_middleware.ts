import { define } from "~/utils/fresh.ts";

export default define.middleware(async (ctx) => {
  const res = await ctx.next();
  console.log(`${ctx.req.method} ${ctx.url.pathname} ${res.status}`);
  return res;
});
