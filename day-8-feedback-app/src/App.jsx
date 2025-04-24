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
    const today = new Date().toLocaleDateString();
    setLastVisit(today);
  }, [streak, hasLoaded]);

  return (
    <div>
      <h2>Daily Streak: {streak} days</h2>
      {lastVisit === new Date().toLocaleDateString() && (
        <p style={{ color: "green" }}>✅ Visited Today</p>
      )}
      <button
        onClick={() => setStreak(streak + 1)}
        disabled={lastVisit === new Date().toLocaleDateString()}
      >
        +1
      </button>
      <button onClick={() => setStreak(0)}>Reset</button>
    </div>
  );
}

function RandomUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUser = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://randomuser.me/api");
      const data = await res.json();
      setUser(data.results[0]);
      setError("");
    } catch (err) {
      setError("Failed to fetch user");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <h2>Random User</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {user && (
        <div>
          <img src={user.picture.large} alt="User" />
          <p>
            {user.name.first} {user.name.last}
          </p>
          <p>{user.email}</p>
        </div>
      )}
      <button onClick={fetchUser}>Get New User</button>
    </div>
  );
}

function RandomUser2() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUser = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://randomuser.me/api");
      const data = await res.json();
      setUser(data.results[0]);
      setError("");
    } catch (err) {
      setError("Failed to fetch user");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <h2>Random User</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {user && (
        <div>
          <img src={user.picture.large} alt="User" />
          <p>
            {user.name.first} {user.name.last}
          </p>
          <p>{user.email}</p>
        </div>
      )}
      <button onClock={fetchUser}>Get New User</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <PersistentCounter />
      <StreakTracker />
      <RandomUser />
      <RandomUser2 />
    </div>
  );
}

export default App;
