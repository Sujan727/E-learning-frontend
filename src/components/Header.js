import { Link } from "react-router-dom";

const Header = () => {
  const logout = () => {
    localStorage.clear();
    window.location.replace("/");
  };
  var menu;
  if (localStorage.getItem("t")) {
    {
      var menu = (
        <nav className="navbar navbar-inverse navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/Loginhome">
            E-LEARNING
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nn navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link dhiraj " to="/Loginhome">
                  Home
                </Link>
              </li>

              <li className="nav-item active">
                <Link className="nav-link dhiraj" to="/Courses">
                  Courses
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link dhiraj" to="/Quiz">
                  Quiz
                </Link>
              </li>

              <li className="nav-item active">
                <Link className="nav-link dhiraj" to="/Leaderboard">
                  Leaderboard
                </Link>
              </li>

              <li class="nav-bar nav active">
                <a
                  class="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                >
                  <i class="fa fa-bell">
                    <span class="badge badge-primary">3</span>
                  </i>
                </a>
                <div class="dropdown-menu c4" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">
                    Welcome to the E-learning.
                  </a>
                  <a class="dropdown-item">Start exploring your course</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item">Something else here</a>
                </div>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item active dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="far fa-user">&nbsp; &nbsp;</i>
                  {localStorage.getItem("username")}
                </a>
                <div
                  className="dropdown-menu c1"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link
                    className="dropdown-item text-dark"
                    to="/"
                    onClick={logout}
                  >
                    <i className="fas fa-power-off mr-2 text-dark"></i>Logout
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      );
    }
  } else {
    var menu = (
      <nav className="navbar navbar-inverse navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          E-LEARNING
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nn navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link dhiraj" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item active">
              <Link className="nav-link dhiraj" to="/Avatar">
                register
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link dhiraj" to="/login">
                login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  return <div>{menu}</div>;
};

export default Header;
