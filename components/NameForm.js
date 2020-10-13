import React, { Component } from "react";

class NameForm extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      //   lastName: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    alert("Thank for typing, " + this.state.value);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-class">
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            required
          />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default NameForm;
