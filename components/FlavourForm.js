import React, { Component } from "react";

class FlavourForm extends Component {
  constructor() {
    super();
    this.state = {
      value: "papaya",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    alert("You love: " + this.state.value);
  }

  render() {
    return (
      <form
        class="form-group"
        onSubmit={this.handleSubmit}
        className="form-class"
      >
        <label for="">
          Pick your fav fruit:
          <select value={this.state.value} onChange={this.handleChange} required>
            <option value="banana">Banana</option>
            <option value="mango">Mango</option>
            <option value="grapes">Grapes</option>
            <option value="papaya">Papaya</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default FlavourForm;
