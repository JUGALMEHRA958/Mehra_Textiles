import logo from "./logo.svg";
import "./App.css";
import { Button, Alert, Breadcrumb } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./Components/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import { URL } from "./api";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <MyNavbar></MyNavbar> */}
    </div>
  );
}
function Register() {
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
                type="text"
                id="form2Example1"
                class="form-control col-md-2"
              />
            </div>
            <div class="form-outline mb-4  ">
              <label class="form-label" for="form2Example1">
                Email address
              </label>
              <input
                type="email"
                id="form2Example1"
                class="form-control col-md-2"
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
                type="password"
                id="form2Example2"
                class="form-control col-md-2"
              />
            </div>
          </center>

          <button type="button" class="btn btn-primary btn-block mb-4 col-md-2">
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
function Login() {
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
          <button type="button" class="btn btn-primary btn-block mb-4 col-md-2">
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

function Home() {
  return (
    <>
      <MyNavbar></MyNavbar>

      <nav>
        <Link to="/login">Login</Link>
      </nav>
    </>
  );
}
export default App;
