import React, { useState } from "react";

const Auth = () => {
  const [isLogIn, setIsLogIn] = useState(true);
  const [error, setError] = useState(null);

  const viewLogin = (status) => {
    setError(null);
    setIsLogIn(status);
  };

  return (
    <div className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-2">
      <div className="pa4 black-80">
        <form className="ba b--transparent ph0 mh0">
          <h2>{isLogIn ? "Please log in" : "Please sign up!"}</h2>
          <input
            type="email"
            placeholder="email"
            className="mv3 b pa2 input-reset ba hover-bg-black hover-white w-100"
          />
          <input
            type="password"
            placeholder="password"
            className="mv3 b pa2 input-reset ba hover-bg-black hover-white w-100"
          />
          {!isLogIn && (
            <input
              type="password"
              placeholder="confirm password"
              className="mv3 b pa2 input-reset ba hover-bg-black hover-white w-100"
            />
          )}
          <input
            type="submit"
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
          />
          {error && <p>{error}</p>}
        </form>
        <div className="lh-copy mt3">
          <button
            onClick={() => viewLogin(false)}
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
          >
            Sign up
          </button>
          <button
            onClick={() => viewLogin(true)}
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
