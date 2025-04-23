import { useState } from "react";

function PostManager() {
  // State to store all submitted posts.
  const [posts, setPosts] = useState([]);
  // State to track the form input values (title and content).
  const [form, setForm] = useState({ title: "", content: "" });
  // State to toggle visibility of the post list.
  const [showPosts, setShowPosts] = useState(true);

  // Updates form state when an input field changes.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handles form submission: prevents page reload, validates input, adds post, and resets form.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.title && form.content) {
      setPosts((prev) => [...prev, form]);
      setForm({ title: "", content: "" });
    }
  };

  return (
    <div>
      <h2>Post Manager</h2>

      {/* Form for submitting a new post. Controlled inputs are tied to state. */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Post Title"
          value={form.title}
          onChange={handleChange}
        />
        <br />
        <textarea
          name="content"
          placeholder="Post Content"
          value={form.content}
          onChange={handleChange}
        />
        <br />

        {/* Button to submit the post form */}
        <button type="submit">Add Post</button>
      </form>

      {/* Toggle visibility of the posts list */}
      <button onClick={() => setShowPosts(!showPosts)}>
        {showPosts ? "Hide Posts" : "Show Posts"}
      </button>

      {/* If posts exist and showPosts is true, render the list */}
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

      {/* Display fallback text if there are no posts */}
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
