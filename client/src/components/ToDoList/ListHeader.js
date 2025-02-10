import React, { useState } from "react";
import Modal from "./Modal";

const ListHeader = ({ listName, getData }) => {
  const [showModal, setShowModal] = useState(false);
  // onNameChange = (event) => {
  //   this.setState({ name: event.target.value });
  // };

  return (
    <div className="pa4 center">
      {/* <input
        className="pa2 input-reset ba bg-transparent hover-bg-black w-100"
        type="text"
        name="name"
        id="name"
        onChange={this.onNameChange}
      ></input> */}
      <h1>{listName}</h1>
      <button
        className="b mr4 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
        onClick={() => setShowModal(true)}
      >
        Add new
      </button>

      <button className="b mr4 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">
        Sign out
      </button>

      {showModal && (
        <Modal mode={"create"} setShowModal={setShowModal} getData={getData} />
      )}
    </div>
  );
};

export default ListHeader;
