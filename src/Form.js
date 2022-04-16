import React from "react";
import "./Form.css";

export default class Form extends React.Component {
  state = {
    firstName: "",
    email: "",
    message: "",
    select: "",
    subscription: false,
    gender: "",
    err: "5 tadan ortiq belgi kiriting!",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  checkedHendler = (e) => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  // inputMail = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  // validateMyEmail = () => {
  //   const re =
  //     /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  //   if (!re.test(this.state.email)) {
  //     alert("Your email is not valid");
  //   }
  // };

  // validateName = () => {
  //   if (this.state.firstName.length < 5) {
  //     document.getElementById("xatojon").innerHTML = this.state.err;
  //   } else {
  //     document.getElementById("xatojon").innerHTML = "";
  //   }
  // };

  buttonSend = () => {
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; //eslint-disable-line
    if (!re.test(this.state.email)) {
      alert("Your email is not valid");
      return;
    }
    if (!this.state.subscription) {
      alert("You should accept all terms & conditions");
      return;
    }

    this.setState({ email: "", subscription: false });
    alert("Thank you for subscription");
  };

  render() {
    const { email, subscription } = this.state;
    return (
      <div>
        <h1>Form</h1>
        {/* <input
          type="text"
          name="firstName"
          value={firstName}
          placeholder="FirstName"
          onChange={this.onChange}
          onBlur={this.validateName}
        />
        <p id="xatojon"></p>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={this.onChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={message}
          onChange={this.onChange}
        ></textarea> */}
        {/* <select name="select" value={select} onChange={this.onChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select> */}
        {/* <label>
          <input
            type="checkbox"
            name="subscription"
            checked={subscription}
            onChange={this.checkedHendler}
          />
          Subscription
        </label> */}
        {/* <input
          type="radio"
          name="gender"
          value="male"
          onChange={this.onChange}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={this.onChange}
        />
        Female */}
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={this.onChange}
          // onBlur={this.validateMyEmail}
        />
        <label htmlFor="subscription">
          <input
            type="checkbox"
            name="subscription"
            checked={subscription}
            onChange={this.checkedHendler}
          />
          I agree with terms and conditions
        </label>
        <button type="button" onClick={this.buttonSend}>
          Send
        </button>
      </div>
    );
  }
}
