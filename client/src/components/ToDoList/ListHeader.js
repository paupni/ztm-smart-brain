import React, { Component } from "react";

class ListHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listName: "input",
    };
  }

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };
  render() {
    return (
      <div>
        <input
          className="pa2 input-reset ba bg-transparent hover-bg-black w-100"
          type="text"
          name="name"
          id="name"
          onChange={this.onNameChange}
        ></input>
        <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">
          Add new
        </button>
      </div>
    );
  }
}

export default ListHeader;
