import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ButtonProps } from "types/Button";

type State = ButtonProps;

const useStore = create<State>()(
  devtools(
    (set) => ({
      count: 0,
      addCount: () => set((state) => ({ count: state.count + 1 })),
    }),
    { name: "CounterStore" }
  )
);

export default useStore;
