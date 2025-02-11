import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import TickIcon from "./TickIcon";
import Modal from "./Modal";

const ListItem = ({ todo, getData }) => {
  const [showModal, setShowModal] = useState(false);

  const deleteItem = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/todos/${todo.id}`,
        {
          method: "DELETE",
        }
      );
      if (response.status === 200) {
        getData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <li className="ph5-ns pv2 list pl0">
      <div className="mw8 center br2 ba b--light-blue bg-light-blue">
        <div className="dt-ns dt--fixed-ns">
          <TickIcon />
          <div className="pa3 pa4-ns dtc-ns v-mid">
            <h3 className="">{todo.title}</h3>
            <ProgressBar />
          </div>
          <div className="pa3 pa4-ns dtc-ns v-mid">
            <button
              className="b mr4 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              onClick={() => setShowModal(true)}
            >
              Edit
            </button>
            <button
              className="b mr4 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              onClick={deleteItem}
            >
              Delete
            </button>
          </div>
          {showModal && (
            <Modal
              mode={"edit"}
              setShowModal={setShowModal}
              getData={getData}
              todo={todo}
            />
          )}
        </div>
      </div>
    </li>
  );
};

export default ListItem;
