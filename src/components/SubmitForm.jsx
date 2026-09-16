import React from 'react'

function SubmitForm() {
    const handleSubmit = (event) => {
        event.preventDefault();

        alert("Form submitted!");
    };

  return (
    <form onSubmit={handleSubmit}>
        <h2>Submit Form</h2>

        <input type="text" placeholder='Enter your name'/>

        <button type='submit'>Submit</button>
    </form>
  );
}

export default SubmitForm;
