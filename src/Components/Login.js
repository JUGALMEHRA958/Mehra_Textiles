import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { URL } from "../api";
function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);
    var data = JSON.stringify({
      email: email,
      password: password,
    });

    var config = {
      method: "post",
      url: `${URL}users/login`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        if (response.data.message == "Success") {
          // alert("Login Successful");
          navigate("/");
        } else {
          alert("Login Fail");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePwdChange(e) {
    setPassword(e.target.value);
  }
  return (
    <>
      <main>
        <h2>Welcome to Login page</h2>
        <p>Login here</p>
      </main>
      <div className="container">
        <form>
          {/* // <!-- Email input --> */}
          <center>
            <div class="form-outline mb-4  ">
              <input
                type="email"
                id="form2Example1"
                class="form-control col-md-2"
                value={email}
                onChange={handleEmailChange}
              />
              <label class="form-label" for="form2Example1">
                Email address
              </label>
            </div>
          </center>

          {/* // <!-- Password input --> */}
          <center>
            <div class="form-outline mb-4">
              <input
                type="password"
                id="form2Example2"
                class="form-control col-md-2"
                onChange={handlePwdChange}
              />
              <label class="form-label" for="form2Example2">
                Password
              </label>
            </div>
          </center>
          {/* // <!-- 2 column grid layout for inline styling --> */}
          <div class="row mb-4">
            <div class="col d-flex justify-content-center">
              {/* // <!-- Checkbox --> */}
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="form2Example31"
                  checked
                />
                <label class="form-check-label" for="form2Example31">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>

            <div class="col-md-12">
              {/* // <!-- Simple link --> */}
              <a href="#!">Forgot password?</a>
            </div>
          </div>

          {/* // <!-- Submit button --> */}
          <button
            type="button"
            class="btn btn-primary btn-block mb-4 col-md-2"
            onClick={handleSubmit}
          >
            Sign in
          </button>

          {/* // <!-- Register buttons --> */}
          <div class="text-center">
            <p>
              Not a member? <Link to="/register">Register</Link>
            </p>
            <Link to="/">Continue without login</Link>
          </div>
        </form>
      </div>
      {/* // <!-- Pills content --> */}
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}
export default Login;
