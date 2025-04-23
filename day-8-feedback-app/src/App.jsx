import { useState } from "react";

function PostManager() {
  //This posts useState creates an empty array, where I would enter the new posts.
  const [posts, setPosts] = useState([]);
  //This form useState creates an object with title and content.
  const [form, setForm] = useState({ title: "", content: "" });
  //This will be used to check if the state is true or false to show or hide the post.
  const [showPosts, setShowPosts] = useState(true);

  //This targets the element key and value in the input section.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  //This uses the preventDefault event so the page doesn't refresh. It also checks if both title and content have been changed, and it will add the updated title and post changes into the post array.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.title && form.content) {
      setPosts((prev) => [...prev, form]);
      setForm({ title: "", content: "" });
    }
  };

  //This is the HTML creating section.
  return (
    <div>
      <h2>Post Manager</h2>

      {/* This is the input section that calls the handle function once you make a change. The value would be the actual input in the Title input box. The onChange is linked to the handleChange function, which checks id there was a change to the value of title. */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Post Title"
          value={form.title}
          onChange={handleChange}
        />
        <br />
        {/* This is very similar to the above input section and reasoning, with the difference being it is for content not title */}
        <textarea
          name="content"
          placeholder="Post Content"
          value={form.content}
          onChange={handleChange}
        />
        <br />

        {/* This is just the button to submit the form */}
        <button type="submit">Add Post</button>
      </form>

      {/* This is a onClick method that will either show or hide the posts */}
      <button onClick={() => setShowPosts(!showPosts)}>
        {showPosts ? "Hide Posts" : "Show Posts"}
      </button>

      {/*  if the showPosts is true, and posts has at least 1 entry, and it creates an unordered list and it will us the map method to loop through the array and create a li that with the index, title, and content.*/}
      {showPosts && posts.length > 0 && (
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
              <h4>{post.title}</h4>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      )}

      {/* this will show the actual post info. */}
      {showPosts && posts.length === 0 && <p>No posts yet.</p>}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <PostManager />
    </div>
  );
}

export default App;
