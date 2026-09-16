import React, { useState } from 'react'

function SelectForm() {
    const [country, setCountry] = useState("");

  return (
    <div>
    <h2>Select Form</h2>  

    <select value={country}
    onChange={(event) => setCountry(event.target.value)}>

        <option value="">Select a Country</option>
        <option value="Nepal">Nepal</option>
        <option value="India">India</option>
        <option value="Japan">Japan</option>
    </select>

    <p>Selected Country: {country}</p>
    </div>
  );
}

export default SelectForm;
