import axios from "axios";
import cryptoJs from "crypto-js";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// import avatar from "../images/avatar.svg";
// import gadget from "../images/gadget.svg";
// import wave from "../images/wave.png";

function Login() {
  // Hooks
  let navigate = useNavigate();

  // Const
  const url = "https://randomuser.me/api/?seed=lll";

  // States
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [data, setData] = useState();

  // Function
  const fetchData = async () => {
    try {
      const response = await axios(url);
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const handleSubmit = (e) => {
    e.preventDefault();
    var hash = cryptoJs
      .SHA256(password + data.data.results[0].login.salt)
      .toString();

    if (
      userName === data.data.results[0].login.username &&
      hash === data.data.results[0].login.sha256
    ) {
      navigate("/dashboard");
    } else {
      setError(true);
    }
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="userName">User Name : </label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password : </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="error">Wrong user Name or Password</p>}
          <button type="submit">Login</button>
        </form>
      </article>
    </>
  );
}

export default Login;
