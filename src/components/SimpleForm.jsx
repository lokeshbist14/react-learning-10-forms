import React, { useState } from "react";

function SimpleForm() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Example 1: Basic Form</h2>

      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter your name"
      />

      <p>Hello, {name}</p>
    </div>
  );
}

export default SimpleForm;