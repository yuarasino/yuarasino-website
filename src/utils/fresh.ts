import { createDefine } from "fresh";

export type State = {
  title: string;
};

export const define = createDefine<State>();
