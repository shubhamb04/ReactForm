import React, { Component } from "react";

class EssayForm extends Component {
  constructor() {
    super();
    this.state = {
      value: "write something...",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    alert("Your essay has been submitted: " + this.state.value);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="form-class">
        <label>
          <textarea
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default EssayForm;
