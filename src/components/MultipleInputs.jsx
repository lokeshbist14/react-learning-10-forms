import React, { useState } from "react";

function MultipleInputs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <h2>Multiple Inputs</h2>

      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter your name"
      />

      <br /><br />

      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Enter your email"
      />

      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default MultipleInputs;