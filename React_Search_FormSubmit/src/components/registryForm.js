import React, { Component } from "react";
import { ValidationForm, TextInput } from "react-bootstrap4-form-validation";

class RegistryForm extends Component {
  state = {
    fullName: "",
    address: "",
    dob: "",
    hod: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e, formData, inputs) => {
    e.preventDefault();
    fetch("https://httpbin.org/post", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData, null, 1)
    });
    alert(
      "Thanks for registration. Here is your data :" +
        JSON.stringify(formData, null, 2)
    );
  };

  handleErrorSubmit = (e, formData, errorInputs) => {
    console.error(errorInputs);
  };

  render() {
    return (
      //Controlled Components
      <ValidationForm
        onSubmit={this.handleSubmit}
        onErrorSubmit={this.handleErrorSubmit}
      >
        <div className="form-group">
          <label htmlFor="fullName">Full name</label>
          <TextInput
            name="fullName"
            id="fullName"
            required
            value={this.state.fullName}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <TextInput
            name="address"
            id="address"
            value={this.state.address}
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <TextInput
            name="dob"
            id="dob"
            type="text"
            required
            pattern="\d{4}/\d{1,2}/\d{1,2}"
            placeholder="YYYY/MM/DD"
            errorMessage={{
              required: "Date of birth is required",
              pattern: "Date of birth will be like this YYYY/MM/DD"
            }}
            value={this.state.dob}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hod">Hour of delivery</label>
          <TextInput
            name="hod"
            id="hod"
            type="text"
            required
            pattern="\d{1,2}:\d{1,2}"
            placeholder="HH:MM"
            errorMessage={{
              required: "Hour of delivery is required",
              pattern: "Hour of delivery will be like this HH:MM"
            }}
            value={this.state.hod}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary">Submit</button>
        </div>
      </ValidationForm>
    );
  }
}

export default RegistryForm;
