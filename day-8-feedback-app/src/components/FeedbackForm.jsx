import { useState } from 'react';

function FeedbackForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState('5');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim().length < 2 || message.trim().length < 10 || !email.includes('@')) {
      alert('Please enter a valid name (2+ chars), valid email, and message (10+ chars).');
      return;
    }
    onSubmit({ name, email, message, rating });
    setSuccess(true);
    setName('');
    setEmail('');
    setMessage('');
    setRating('5');
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="feedback-form">
      <h2>Submit Feedback</h2>
      {success && <div className="toast">Feedback submitted successfully!</div>}

      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="form-input"
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="form-input"
        />
      </label>

      <label>
        Message:
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="form-textarea"
        />
      </label>

      <label>
        Rating:
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="5">★★★★★</option>
          <option value="4">★★★★☆</option>
          <option value="3">★★★☆☆</option>
          <option value="2">★★☆☆☆</option>
          <option value="1">★☆☆☆☆</option>
        </select>
      </label>

      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
}

export default FeedbackForm;
