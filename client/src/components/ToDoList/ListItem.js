import React, { Component } from "react";
import ProgressBar from "./ProgressBar";
import TickIcon from "./TickIcon";

const ListItem = ({ todo }) => {
  return (
    <li className="ph5-ns pv2 list pl0">
      <div className="mw8 center br2 ba b--light-blue bg-light-blue o-60">
        <div className="dt-ns dt--fixed-ns">
          <TickIcon />
          <div className="pa3 pa4-ns dtc-ns v-mid">
            <h3 className="">{todo.title}</h3>
            <ProgressBar />
          </div>
          <div className="pa3 pa4-ns dtc-ns v-mid">
            <button className="b mr4 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">
              Edit
            </button>
            <button className="b mr4 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">
              Delete
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
