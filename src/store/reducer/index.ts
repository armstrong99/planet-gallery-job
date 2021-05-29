import { State, Action } from "../../@types/store";

export const ReducState: State = {};

export const reducer = (state: State, { type, payload }: Action) => {
  switch (type) {
    case "Scroll_Window_Position":
      return { ...state, ...payload };
    case "SCROLL_INTO_VIEW":
      return { ...state, ...payload };
    default:
      return state;
  }
};
