import React, { Component } from "react";

class Form1 extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: true,
      gender: "",
      favColor: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    alert("Thanks for the submission!");
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({
          [name]: value,
        });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={this.state.value}
          onChange={this.handleChange}
          required
        />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={this.state.value}
          onChange={this.handleChange}
          required
        />
        <br />
        <textarea value={"this is textarea"} onChange={this.handleChange} />
        <br />
        <label>
          <input
            type="checkbox"
            name="isFriendly"
            onChange={this.handleChange}
            checked={this.state.isFriendly}
            required
          />
          Is Friend?
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={this.handleChange}
            checked={this.state.gender === "male"}
            required
          />
          Male
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={this.handleChange}
            checked={this.state.gender === "female"}
            required
          />
          Female
        </label>
        <br />
        <label>
          {" "}
          Choose your fav Col:
          <select
            value={this.state.favColor}
            onChange={this.handleChange}
            name="favColor"
            required
          >
            <option value="blue">Blue</option>
            <option value="red">Red</option>
            <option value="Black">Black</option>
          </select>
        </label>
        <br />
        <button>Submit</button>
        <h1>
          {this.state.firstName} {this.state.lastName}
        </h1>
      </form>
    );
  }
}

export default Form1;
