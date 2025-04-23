import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Simple Counter</h2>
      <p>Count: {count}</p>
      <button onClick={()=> setCount(count + 1)}>Add</button>
    </div>
  )
}

function NameInput() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Enter Your Name:</h2>
      <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}/>
      <p>Your name is: {name}</p>
    </div>
  )
}

function Greeting(props) {
  return (
    <h1>
      Hello, {props.name} {props.test}
    </h1>
  );
}

function App() {
  return (
    <div className="App">
      <Greeting name="William" test="Beast" />
      <Counter />
      <NameInput />
    </div>
  );
}

export default App;
