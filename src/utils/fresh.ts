import { createDefine } from "fresh";

export type State = {
  title?: string;
  description?: string;
  robots?: string;
};

export const define = createDefine<State>();
