import React, { useState } from "react";

const Auth = () => {
  const [isLogIn, setIsLogIn] = useState(true);
  const [error, setError] = useState(null);

  const viewLogin = (status) => {
    setError(null);
    setIsLogIn(status);
  };

  return (
    <div className="pa4">
      <div className="box">
        <form>
          <h2>{isLogIn ? "Please log in" : "Please sign up!"}</h2>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          {!isLogIn && <input type="password" placeholder="confirm password" />}
          <input type="submit" className="button" />
          {error && <p>{error}</p>}
        </form>
        <div className="">
          <button onClick={() => viewLogin(false)}>Sign up</button>
          <button onClick={() => viewLogin(true)}>Log in</button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
