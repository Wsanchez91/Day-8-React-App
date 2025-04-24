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

function StreakTracker() {
  const [streak, setStreak] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [lastVisit, setLastVisit] = useState("");

  useEffect(() => {
    const streakData = localStorage.getItem("streakData");
    //
    const today = new Date().toLocaleDateString();

    if (streakData) {
      const parsed = JSON.parse(streakData);
      const { streak, lastVisit } = parsed;

      if (lastVisit !== today) {
        setStreak(streak + 1);
      } else {
        setStreak(streak);
      }
    } else {
      setStreak(1);
    }
    setLastVisit(today);
    setHasLoaded(true);
  }, []);

  useEffect(() => {
    if (hasLoaded) {
      const today = new Date().toLocaleDateString();
      const dataToSave = {
        streak,
        lastVisit: today,
      };
      localStorage.setItem("streakData", JSON.stringify(dataToSave));
    }
    const today = new Date().toLocaleDateString()
    setLastVisit(today);
  }, [streak, hasLoaded]);

  return (
    <div>
      <h2>Daily Streak: {streak} days</h2>
      {lastVisit === new Date().toLocaleDateString() && (
        <p style={{ color: "green" }}>✅ Visited Today</p>
      )}
      <button onClick={()=>setStreak(streak + 1)}
        disabled={lastVisit === new Date().toLocaleDateString()}>+1</button>
        <button onClick={() => setStreak(0)}>Reset</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <PersistentCounter />
      <StreakTracker />
    </div>
  );
}

export default App;
