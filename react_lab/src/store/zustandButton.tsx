import { create } from "zustand";
import { devtools } from "zustand/middleware";

// 상태 타입 정의
type State = {
  count: number;
  increase: () => void;
  decrease: () => void;
};

// 스토어 생성
const useStore = create<State>()(
  devtools(
    (set) => ({
      count: 0,
      increase: () => set((state) => ({ count: state.count + 1 })),
    }),
    { name: "CounterStore" } // Redux DevTools에서 표시될 이름
  )
);

export default useStore;
