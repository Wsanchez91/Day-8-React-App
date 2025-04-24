import { useState, useEffect } from "react";

function PersistentCounter() {
  const [count, setCount] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);

  // TODO: Load saved count from localStorage on first render
  useEffect(() => {
    const stored = localStorage.getItem("count");
    if (stored !== null && stored !== "") {
      setCount(JSON.parse(stored));
      setCount(Number(JSON.parse(stored)));
    }
    setHasLoaded(true);
  }, []);

  // TODO: Save count to localStorage whenever it changes
  useEffect(() => {
    if (hasLoaded) {
      localStorage.setItem("count", JSON.stringify(count));
    }
  }, [count, hasLoaded]);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <PersistentCounter />
    </div>
  );
}

export default App;
