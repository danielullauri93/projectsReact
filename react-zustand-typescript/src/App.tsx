import { useEffect } from "react";
import { useCounterStore } from "./store/CounterStore";

function App() {
  const { count, title, increment, decrement, getPost, post, multiply } =
    useCounterStore((state) => state);

  useEffect(() => {
    getPost();
  }, [getPost]);

  return (
    <div>
      <h1>
        {title}: {count}
      </h1>
      <button onClick={() => increment(10)}>Increment</button>
      <button onClick={() => decrement(10)}>Decrement</button>
      <button onClick={() => multiply(2)}>Multiply</button>

      <hr />
      <h1>Posts</h1>
      <ul>
        {post.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
