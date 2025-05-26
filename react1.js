import React, { useState } from 'react';

function SimpleForm() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
        <button type="submit">Submit</button>
      </form>
      {submitted && <h3>Hello, {submitted}!</h3>}
    </div>
  );
}

export default SimpleForm;
