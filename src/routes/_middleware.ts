import { define } from "~/utils/typing.ts";

export default define.middleware(async ({ next, req, url }) => {
  const res = await next();
  console.log(`${req.method} ${url.pathname} ${res.status}`);
  return res;
});
