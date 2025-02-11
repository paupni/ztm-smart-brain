import React from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";

const Modal = ({ mode, setShowModal, getData, todo }) => {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const editMode = mode === "edit" ? true : false;

  const [data, setData] = useState({
    user_email: editMode ? todo.user_email : cookies.Email,
    title: editMode ? todo.title : "",
    progress: editMode ? todo.progress : 50,
    date: editMode ? todo.date : new Date(),
  });

  const postData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/todos`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (response.status === 200) {
        console.log("worked");
        setShowModal(false);
        getData();
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const editData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/todos/${todo.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      if (response.status === 200) {
        setShowModal(false);
        getData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((date) => ({
      ...data,
      [name]: value,
    }));
  };

  return (
    <div
      className=""
      style={{
        position: "absolute",
        zIndex: 1000,
        left: 0,
        top: 180,
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="modal"
        style={{
          width: "500px",
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "40px",
          boxShadow:
            "rgba(0,0,0,0.05) 0 6px 24px 0, rgba(0,0,0,0.08) 0 0 0 1px",
        }}
      >
        <div
          className="form-title-container"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <h3>Let's {mode} your task</h3>
          <button
            onClick={() => setShowModal(false)}
            className="b mr4 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
          >
            X
          </button>
        </div>
        <form
          className="form"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <input
            className="ba b--black-20 pa2 mb2 db w-200"
            type="text"
            required
            placeholder="Your task goes here"
            name="title"
            value={data.title}
            maxLength={30}
            onChange={handleChange}
          ></input>
          <label htmlFor="range">Drag to select your current progress</label>
          <input
            className="ba b--black-20 pa2 mb2 db w-100"
            type="range"
            min="0"
            max="100"
            required
            name="progress"
            value={data.progress}
            onChange={handleChange}
          ></input>
          <input
            className="b mr4 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
            type="submit"
            onClick={editMode ? editData : postData}
          ></input>
        </form>
      </div>
    </div>
  );
};

export default Modal;
