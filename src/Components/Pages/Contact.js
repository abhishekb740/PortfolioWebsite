import React from "react";
import "./Contact.css";
import useInput from "../Hooks/use-input";
import Footer from "../Footer/Footer"
const Contact = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredContact,
    isValid: enteredContactIsValid,
    hasError: contactInputHasError,
    valueChangeHandler: contactChangeHandler,
    inputBlurHandler: contactBlurHandler,
    reset: resetContactInput,
  } = useInput((value) => value.length === 10);

  const {
    value: enteredCompany,
    isValid: enteredCompanyIsValid,
    hasError: companyInputHasError,
    valueChangeHandler: companyChangeHandler,
    inputBlurHandler: companyBlurHandler,
    reset: resetCompanyInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredProject,
    isValid: enteredProjectIsValid,
    hasError: projectInputHasError,
    valueChangeHandler: projectChangeHandler,
    inputBlurHandler: projectBlurHandler,
    reset: resetProjectInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (
    enteredContactIsValid &&
    enteredContactIsValid &&
    enteredNameIsValid &&
    enteredProjectIsValid
  ) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    resetNameInput();
    resetContactInput();
    resetEmailInput();
    resetProjectInput();
    resetCompanyInput();
  };

  const nameInputClasses = nameInputHasError
    ? "name grid invalid"
    : "name grid";
  const emailInputClasses = emailInputHasError
    ? "email grid invalid"
    : "email grid";
  const contactInputClasses = contactInputHasError
    ? "phone-no grid invalid"
    : "phone-no grid";
  const projectInputClasses = projectInputHasError
    ? "project grid invalid"
    : "project grid";

  return (
    <form onSubmit={formSubmitHandler} className="contact">
      <div className="cont-me">Contact Me</div>
      <div className="details">
        <div className={nameInputClasses}>
          <label htmlFor="name">*Name</label>
          <input
            type="text"
            className="name"
            onBlur={nameBlurHandler}
            value={enteredName}
            onChange={nameChangeHandler}
          ></input>
        </div>
        <div className={emailInputClasses}>
          <label htmlFor="email">*E-mail</label>
          <input
            type="email"
            className="email"
            onBlur={emailBlurHandler}
            value={enteredEmail}
            onChange={emailChangeHandler}
          ></input>
        </div>
        <div className={contactInputClasses}>
          <label htmlFor="contact">*Phone No</label>
          <input
            type="tel"
            className="contact-no"
            onBlur={contactBlurHandler}
            value={enteredContact}
            onChange={contactChangeHandler}
          ></input>
        </div>
        <div className="company grid">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            className="company"
            onBlur={companyBlurHandler}
            value={enteredCompany}
            onChange={companyChangeHandler}
          ></input>
        </div>
      </div>
      <div className={projectInputClasses}>
        <label htmlFor="project">*Project-Details</label>
        <input
          id="project"
          type="text"
          className="proj-details"
          onBlur={projectBlurHandler}
          value={enteredProject}
          onChange={projectChangeHandler}
        ></input>
      </div>
      <button
        className="submit-btn btn animate-pulse antialiased border border-slate-300 transition ease-in-out delay-50 bg-slate-500 hover:-translate-y-1 hover:scale-110 hover:bg-#10b981-500  hover:animate-none"
        disabled={!formIsValid}
      >
        Submit
      </button>
      <div>
        <Footer />
      </div>
    </form>
  );
};

export default Contact;
