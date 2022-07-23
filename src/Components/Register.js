import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { URL } from "../api";
function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePwdChange(e) {
    setPassword(e.target.value);
  }
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password, name);
    var data = JSON.stringify({
      email: email,
      password: password,
      name: name,
    });

    var config = {
      method: "post",
      url: `${URL}users/register`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        if (response.data.message == "User created successfully") {
          alert("Register Successful");
          navigate("/login");
        } else {
          alert("Login Fail");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <h2>Welcome to Register page</h2>
      <p>Register here</p>
      <div className="container">
        <form>
          {/* // <!-- Email input --> */}
          <center>
            <div class="form-outline mb-4  ">
              <label class="form-label" for="form2Example1">
                Full Name
              </label>
              <input
                value={name}
                type="text"
                id="form2Example1"
                class="form-control col-md-2"
                onChange={handleNameChange}
              />
            </div>
            <div class="form-outline mb-4  ">
              <label class="form-label" for="form2Example1">
                Email address
              </label>
              <input
                value={email}
                type="email"
                id="form2Example1"
                class="form-control col-md-2"
                onChange={handleEmailChange}
              />
            </div>
          </center>

          {/* // <!-- Password input --> */}
          <center>
            <div class="form-outline mb-4">
              <label class="form-label" for="form2Example2">
                Password
              </label>
              <input
                value={password}
                type="password"
                id="form2Example2"
                class="form-control col-md-2"
                onChange={handlePwdChange}
              />
            </div>
          </center>

          <button
            type="button"
            class="btn btn-primary btn-block mb-4 col-md-2"
            onClick={handleSubmit}
          >
            Register
          </button>

          {/* // <!-- Register buttons --> */}
          <div class="text-center">
            <p>
              Already a member? <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
