import { useState } from "react";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedbacks }) {
  if (feedbacks.length === 0) {
    return <p className="no-feedback">No feedback yet.</p>;
  }
  return (
    <div className="feedback-list">
      {feedbacks.map((feedback, index) => (
        <FeedbackItem key={index} feedback={feedback} />
      ))}
    </div>
  );
}

export default FeedbackList;