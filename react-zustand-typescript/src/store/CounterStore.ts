import { create } from "zustand";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface CounterState {
  count: number;
  title: string;
  increment: (value: number) => void;
  decrement: (value: number) => void;
  post: Post[];
  getPost: () => Promise<void>;
  multiply: (value: number) => void;
}

export const useCounterStore = create<CounterState>((set, get) => ({
  count: 10,
  title: "Counter Store",
  post: [],
  increment: (value: number) =>
    set((state) => ({ count: state.count + value })),
  decrement: (value: number) =>
    set((state) => ({ count: state.count - value })),
  getPost: async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    set({ post: data });
    // console.log(data);
  },
  multiply: (value: number) => {
    const { count } = get();
    set({ count: count * value });
  },
}));
