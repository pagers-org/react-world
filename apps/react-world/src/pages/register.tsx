import useRegister from '../hooks/useRegister';

export const RegisterPage: React.FC = () => {
  const { userData, error, isLoading, handleInputChange, handleSubmit } =
    useRegister();

  return (
    <>
      <nav className="navbar navbar-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            conduit
          </a>
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Sign in
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/register">
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign up</h1>
              <p className="text-xs-center">
                <a href="/login">Have an account?</a>
              </p>
              {error && (
                <ul className="error-messages">
                  {Object.entries(error).map(([key, value]) => (
                    <li key={key}>
                      {key} {value.join(' ')}
                    </li>
                  ))}
                </ul>
              )}
              <form onSubmit={handleSubmit}>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={userData.username}
                    onChange={handleInputChange}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={userData.email}
                    onChange={handleInputChange}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={userData.password}
                    onChange={handleInputChange}
                  />
                </fieldset>
                <button
                  type="submit"
                  className="btn btn-lg btn-primary pull-xs-right"
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing up...' : 'Sign up'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <a href="/" className="logo-font">
            conduit
          </a>
          <span className="attribution">
            An interactive learning project from{' '}
            <a href="https://thinkster.io">Thinkster</a>. Code &amp; design
            licensed under MIT.
          </span>
        </div>
      </footer>
    </>
  );
};
