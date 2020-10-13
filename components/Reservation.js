import React, { Component } from "react";

class Reservation extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      isGoing: true,
      numOfGuest: 2,
      gender: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(`Thanks ${this.state.firstName} for your submission!`);
  }

  handleInputChange(event) {
    const { name, value, checked, type } = event.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
          [name]: value,
        });
  }

  render() {
    return (
      <form className="form-class" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="first name"
          value={this.state.firstName}
          onChange={this.handleInputChange}
          required
        />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="last name"
          value={this.state.lastName}
          onChange={this.handleInputChange}
          required
        />
        <br />
        <label>
          Gender:
          <br />
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleInputChange}
            required
          />{" "}
          Male
          <br />
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleInputChange}
            required
          />{" "}
          Female
        </label>
        <br />
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Number Of Guest:
          <input
            name="numOfGuest"
            type="number"
            value={this.state.numOfGuest}
            onChange={this.handleInputChange}
            required
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Reservation;
