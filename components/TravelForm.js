import React from "react";

function TravelForm(props) {
  return (
    <form onSubmit={props.handleSubmit} className="form-class">
      <h1 className="title">Book a flight!</h1>
      <div className="form-group">
        <input
          type="text"
          onChange={props.handleChange}
          name="firstName"
          placeholder="First Name"
          value={props.firstName}
          required
        />
      </div>
      <br />
      <div className="form-group">
        <input
          type="text"
          onChange={props.handleChange}
          name="lastName"
          placeholder="Last Name"
          value={props.lastName}
          required
        />
      </div>
      <br />
      <div className="form-group">
        <input
          type="number"
          onChange={props.handleChange}
          name="age"
          min="0"
          max="120"
          value={props.age}
          required
        />
      </div>
      <br />
      <div className="form-group">
        <label>Gender</label>
        <br />
        <label>
          {" "}
          <input
            type="radio"
            onChange={props.handleChange}
            name="gender"
            value={props.gender === "male"}
            required
          />
          Male
        </label>{" "}
        <br />
        <label>
          {" "}
          <input
            type="radio"
            onChange={props.handleChange}
            name="gender"
            value={props.gender === "female"}
            required
          />
          Female
        </label>{" "}
        <br />
        <label>
          {" "}
          <input
            type="radio"
            onChange={props.handleChange}
            name="gender"
            value={props.gender === "other"}
            required
          />
          Other
        </label>{" "}
      </div>
      <br />
      <div className="form-group">
        <label>Travelling to: </label>
        <select
          value={props.destination}
          name="destination"
          onChange={props.handleChange}
          required
        >
          <option value="bombay">Bombay</option>
          <option value="delhi">Delhi</option>
          <option value="chennai">Chennai</option>
        </select>
      </div>
      <br />
      <div className="form-group">
        <label>Dietery restriction: </label>
        <br />
        <label>
          <input
            type="checkbox"
            onChange={props.handleChange}
            name="isVegan"
            checked={props.deiteryRestriction.isVegan}
          />
          Vegan
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            onChange={props.handleChange}
            name="isKosher"
            checked={props.deiteryRestriction.isKosher}
          />
          Kosher
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            onChange={props.handleChange}
            name="isLactoseFree"
            checked={props.deiteryRestriction.isLactoseFree}
          />
          Lactose Free
        </label>
      </div>
      <br />
      <button className="btn btn-primary"> Sumbit</button>
    </form>
  );
}

export default TravelForm;
