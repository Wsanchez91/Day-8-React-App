import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Simple Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
}

function NameInput() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Enter Your Name:</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Your name is: {name}</p>
    </div>
  );
}

function MultiInputForm() {
  // this uses the useState method. I used the formData as my current value, and setFormData as the logic used to change the value of formData. In this case the useState parameter is an object vs the last few examples have been a number or string. Making it an object allows one to add multiple values, and use it to manipulate them later.
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  //looks like this is creating a variable that is the actual event that handles the event on the onChange section, similarly to the last lesson.
  const handleChange = (e) => {
    const { name, value } = e.target;
    // setFromData is the logic, so I guess is giving it a function. It uses the prev as an argument then it creates a object that uses a spread operator and maybe a bracket notation of name which I think it's form the e.target, and made it equal to value.
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //This is a new variable that creates a function that is to prevent the default of the page, and uses alert once you submit your entries.
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted:\nName: ${formData.name}\nEmail: ${formData.email}`);
  };

  //The return is the actual HTML element that will be passed in to the page. In the case, there are 3 input sections, one for name, email, and password. Each one is linked to the formData object value. Also, the onChange is now linked to the handleChange that has the actual e.target logic.
  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />

      <br />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <br />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />

      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

function Greeting(props) {
  return (
    <h1>
      Hello, {props.name} {props.test}
    </h1>
  );
}

function ToggleMessage() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h2>Toggle Message</h2>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Message
      </button>
      {show && <p>This is a secret message revealed by React!</p>}
    </div>
  );
}

function LoginToggle() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      {isLoggedIn && <p>Welcome back, user!</p>}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Greeting name="William" test="Beast" />
      <Counter />
      <NameInput />
      <MultiInputForm />
      <ToggleMessage />
      <LoginToggle />
    </div>
  );
}

export default App;
