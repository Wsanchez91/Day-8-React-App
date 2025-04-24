import { useState, useEffect } from "react";

function PersistentCounter() {
  const [count, setCount] = useState(0);
  // TODO: Load saved count from localStorage on first render

  // TODO: Save count to localStorage whenever it changes
}

return (
  <div>
    <h2>Counter: {count}</h2>
    <button onClick={() => setCount(count + 1)}>+1</button>
  </div>
);

function App() {
  return (
    <div className="App">
      <PostManager />
    </div>
  );
}

export default App;
