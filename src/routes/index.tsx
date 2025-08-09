import { page } from "fresh";
import { define } from "../utils/fresh.ts";
import { HeroArea } from "../components/index/HeroArea.tsx";
import { ProfileSection } from "../components/index/ProfileSection.tsx";

export const handler = define.handlers({
  GET: ({ state }) => {
    state.title = "yuarasino-website";
    state.description = "新篠ゆうのウェブサイト";
    return page();
  },
});

export default define.page(() => {
  return (
    <main>
      <section>
        <HeroArea />
        <ProfileSection />
      </section>
    </main>
  );
});
