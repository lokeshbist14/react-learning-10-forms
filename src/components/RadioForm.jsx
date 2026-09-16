import React, { useState } from "react";

function RadioForm() {
  const [gender, setGender] = useState("");

  return (
    <div>
      <h2>Radio Form</h2>

      <label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={gender === "Male"}
          onChange={(event) => setGender(event.target.value)}
        />
        Male
      </label>

      <br />

      <label>
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={gender === "Female"}
          onChange={(event) => setGender(event.target.value)}
        />
        Female
      </label>

      <p>Selected: {gender}</p>
    </div>
  );
}

export default RadioForm;