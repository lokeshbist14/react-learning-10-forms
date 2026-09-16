import React, { useState } from "react";

function ValidationForm() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name === "") {
      setError("Name is required");
    } else {
      setError("");
      alert("Form submitted!");
    }
  };

  return (
    <div>
      <h2>Validation Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
        />

        <button type="submit">Submit</button>
      </form>

      <p>{error}</p>
    </div>
  );
}

export default ValidationForm;