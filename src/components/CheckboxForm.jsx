import React, { useState } from 'react'

function CheckboxForm() {
    const [agree, setAgree] = useState(false);

  return (
    <div>
    <h2>Checkbox Form</h2>  

    <label>
        <input type="checkbox" 
        checked={agree}
        onChange={(event) => setAgree(event.target.checked)}/>
        I agree to the terms
    </label>

    <p>Status: {agree ? "Agreed" : "Not Agreed"}</p>
    </div>
  );
}

export default CheckboxForm;
