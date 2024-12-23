import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ButtonProps } from "types/button";

type State = ButtonProps;

const useStore = create<State>()(
  devtools(
    (set) => ({
      count: 0,
      addCount: () => set((state) => ({ count: state.count + 1 })),
    }),
    { name: "CounterStore" } // Redux DevTools에서 표시될 이름
  )
);

export default useStore;
