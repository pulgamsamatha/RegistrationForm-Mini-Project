import { Component } from "react";

import "./index.css";

class RegistrationForm extends Component {
  state = {
    // .01 first step
    firstNameInput: "",
    lastNameInput: "",
    showFirstNameError: false,
    showLastNameError: false,
    isFormSubmitted: false,
  };

  onChangeFirstName = (event) => {
    // .02 second step
    this.setState({ firstNameInput: event.target.value });
    console.log(event.target.value);
  };

  onChangeLastName = (event) => {
    // .02 second step
    this.setState({ lastNameInput: event.target.value });
    console.log(event.target.value);
  };

  validateFirstName = () => {
    // .03 third step
    const { firstNameInput } = this.state;
    return firstNameInput !== "";
  };

  validateLastName = () => {
    // .03 third step
    const { lastNameInput } = this.state;
    return lastNameInput !== "";
  };

  onBlurFirstName = () => {
    // .04 fourth step
    const isValid = this.validateFirstName();
    this.setState({ showFirstNameError: !isValid });
  };

  onBlurLastName = () => {
    // .04 fourth step
    const isValid = this.validateLastName();
    this.setState({ showLastNameError: !isValid });
  };

  onSubmitForm = (event) => {
    // .05 fifth step
    event.preventDefault();

    const isValidFirstName = this.validateFirstName();
    const isValidLastName = this.validateLastName();

    if (isValidFirstName && isValidLastName) {
      this.setState({ isFormSubmitted: true });
    } else {
      this.setState({
        showFirstNameError: !isValidFirstName,
        showLastNameError: !isValidLastName,
        isFormSubmitted: false,
      });
    }
  };

  onClickSubmitAnotherResponse = () => {
    // .06 sixth step
    this.setState({
      firstNameInput: "",
      lastNameInput: "",
      showFirstNameError: false,
      showLastNameError: false,
      isFormSubmitted: false,
    });
  };

  renderFirstNameField = () => {
    const { firstNameInput, showFirstNameError } = this.state;
    const className = showFirstNameError
      ? "name-input-field error-field" // Add error styling if there's an error
      : "name-input-field";

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstName"
          className={className}
          value={firstNameInput}
          placeholder="First name"
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
        {showFirstNameError && <p className="error-message">Required</p>}
      </div>
    );
  };

  renderLastNameField = () => {
    const {lastNameInput, showLastNameError} = this.state
    const className = showLastNameError
      ? 'name-input-field error-field' // Add error styling if there's an error
      : 'name-input-field'

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastName"
          value={lastNameInput}
          className={className}
          placeholder="Last name"
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
        {showLastNameError && <p className="error-message">Required</p>}
      </div>
    );
  };

  renderRegistrationForm = () => {
    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        {this.renderFirstNameField()}
        {this.renderLastNameField()}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    );
  };

  renderSubmissionSuccessView = () => {
    return (
      <>
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
          className="success-image"
        />
        <p>Submitted Successfully</p>
        <button type="button" className="submit-button" onClick={this.onClickSubmitAnotherResponse}>
          Submit Another Response
        </button>
      </>
    );
  };

  render() {
    const { isFormSubmitted } = this.state;
    return (
      <div className="registration-form-container">
        <h1 className="form-title">Registration</h1>
        <div className="view-container">
         {
          isFormSubmitted
            ? this.renderSubmissionSuccessView()
            : this.renderRegistrationForm()
         }
        </div>
      </div>
    );
  }
}

export default RegistrationForm;
