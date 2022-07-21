function Login() {
  return (
    <>
      <main>
        <h2>Login page</h2>
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
              Not a member? <a href="#!">Register</a>
            </p>
            <p>or sign up with:</p>
            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-facebook-f"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-google"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-twitter"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-github"></i>
            </button>
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
