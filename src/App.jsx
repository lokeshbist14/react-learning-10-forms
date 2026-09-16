import React from "react";
import SimpleForm from "./components/SimpleForm";
import SubmitForm from "./components/SubmitForm";
import MultipleInputs from "./components/MultipleInputs";
import ObjectForm from "./components/ObjectForm";
import CheckboxForm from "./components/CheckboxForm";
import RadioForm from "./components/RadioForm";
import SelectForm from "./components/SelectForm";
import TextareaForm from "./components/TextareaForm";
import ValidationForm from "./components/ValidationForm";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <div>

      {/* Example 1 */}
      <SimpleForm />
      <br />

      {/* Example 2 */}
      <SubmitForm />
      <br />

      {/* Example 3 */}
      <MultipleInputs />
      <br />

      {/* Example 4 */}
      <ObjectForm />
      <br />

      {/* Example 5 */}
      <CheckboxForm />
      <br />

      {/* Example 6 */}
      <RadioForm />
      <br />

      {/* Example 7 */}
      <SelectForm />
      <br />

      {/* Example 8 */}
      <TextareaForm />
      <br />

      {/* Example 9 */}
      <ValidationForm />
      <br />

      {/* Example 10 */}
      <RegistrationForm />
    </div>
  );
}

export default App;