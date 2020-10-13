import React, { Component } from "react";
import TravelForm from "./TravelForm";
class TravelFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: 0,
      gender: "",
      destination: [],
      deiteryRestriction: {
        isVegan: false,
        isKosher: false,
        isLactoseFree: false,
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    alert(`Thanks for the submission, ${this.state.firstName}!`);
    this.setState({
      firstName: "",
      lastName: "",
      age: 0,
      gender: "",
      destination: [],
      deiteryRestriction: {
        isVegan: false,
        isKosher: false,
        isLactoseFree: false,
      },
    });
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState((prevState) => {
          return {
            deiteryRestriction: {
              ...prevState.deiteryRestriction,
              [name]: checked,
            },
          };
        })
      : this.setState({
          [name]: value,
        });
  }
  render() {
    return (
      <TravelForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        {...this.state}
      />
    );
  }
}

export default TravelFormContainer;
