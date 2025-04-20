import { useState } from 'react';

function FeedbackItem({ feedback }) {
  const { name, message, rating } = feedback;

  return (
    <div className="feedback-item">
      <h3 className="feedback-name">{name}</h3>
      <p className="feedback-message">{message}</p>
      <p className="feedback-rating">Rating: {"★".repeat(Number(rating))}</p>
    </div>
  );
}

export default FeedbackItem;
