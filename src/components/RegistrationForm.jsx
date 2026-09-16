import React, { useState } from "react";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name === "" || email === "" || password === "") {
      setError("Please fill in all fields");
      return;
    }

    if (!agree) {
      setError("Please agree to the terms");
      return;
    }

    setError("");
    alert("Registration successful!");
  };

  return (
    <div>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
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

        <br /><br />

        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter your password"
        />

        <br /><br />

        <label>
          <input
            type="checkbox"
            checked={agree}
            onChange={(event) => setAgree(event.target.checked)}
          />
          I agree to the terms
        </label>

        <br /><br />

        <button type="submit">Register</button>
      </form>

      <p>{error}</p>
    </div>
  );
}

export default RegistrationForm;