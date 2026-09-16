import React, { useState } from 'react'

function TextareaForm() {
    const [message, setMessage] = useState("");

  return (
    <div>
    <h2>Textarea Form</h2>  

    <textarea value={message}
    onChange={(event) => setMessage(event.target.value)}
    placeholder='Enter your message'
    rows={5}
    cols={30} />

    <p>Your message: {message}</p>
    </div>
  );
}

export default TextareaForm;
