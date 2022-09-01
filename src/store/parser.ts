import { atom } from "recoil";

export const grammarStore = atom<nearley.CompiledRules | null>({
  key: "grammarStore",
  default: null,
});
