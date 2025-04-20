import { useState, useEffect } from 'react';
import './App.css';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';

function App() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("feedbacks"));
    if (saved) setFeedbacks(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const addFeedback = (newFeedback) => {
    setFeedbacks(prev => [...prev, newFeedback]);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const clearFeedbacks = () => {
    localStorage.removeItem("feedbacks");
    setFeedbacks([]);
  };

  return (
    <div className="App">
      <h1>Feedback Form</h1>
      
      <FeedbackForm onSubmit={addFeedback} />

      {showToast && <div className="toast">Feedback submitted successfully!</div>}

      <button onClick={clearFeedbacks} className="clear-btn">Clear All Feedback</button>

      <h2>Previous Feedback</h2>
      <FeedbackList feedbacks={feedbacks} />
    </div>
  );
}

export default App;