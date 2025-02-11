import React, { useState } from "react";
import Modal from "./Modal";
import { useCookies } from "react-cookie";

const ListHeader = ({ listName, getData }) => {
  const [showModal, setShowModal] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const authToken = cookies.AuthToken;

  const handleSignOut = () => {
    removeCookie("AuthToken", "Email", { path: "/" });
    window.location.reload();
  };

  return (
    <div className="pa4 center">
      <h1>{listName}</h1>
      <button
        className="b mr4 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
        onClick={() => setShowModal(true)}
      >
        Add new
      </button>

      <button
        className="b mr4 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
        onClick={handleSignOut}
      >
        Sign out
      </button>

      {showModal && (
        <Modal mode={"create"} setShowModal={setShowModal} getData={getData} />
      )}
    </div>
  );
};

export default ListHeader;
