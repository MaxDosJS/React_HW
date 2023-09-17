import React, { useState } from "react";
import InputField from "./InputField";
import SuccessMessage from "./SuccessMessage";

export default function RegistrationForm() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleInputChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      {submitted && valid ? <SuccessMessage /> : null}
      <InputField
        type="text"
        name="firstName"
        value={values.firstName}
        placeholder="First Name"
        onChange={handleInputChange}
        submitted={submitted}
        required
      />
      <InputField
        type="text"
        name="lastName"
        value={values.lastName}
        placeholder="Last Name"
        onChange={handleInputChange}
        submitted={submitted}
        required
      />
      <InputField
        type="text"
        name="email"
        value={values.email}
        placeholder="Email"
        onChange={handleInputChange}
        submitted={submitted}
        required
      />
      <button className="form-field" type="submit">
        Register
      </button>
    </form>
  );
}