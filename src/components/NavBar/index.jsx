const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-sm fixed-top bg-white"
      style={{ boxShadow: "0 0  1px grey" }}
    >
      <div className="d-flex px-4 w-100 justify-content-between align-items-center">
        <a href="/" className="navbar-brand text-danger fw-semibold">
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ width: "3", height: "3rem" }}
          />
          <span className="text-danger fw-bold text-uppercase">
            &nbsp; Lucky
          </span>{" "}
          Star
        </a>
        <ul className="navbar-nav d-flex align-items-center gap-4">
          <li className="nav-item">
            <a href="/" className="nav-link">
              <div className="d-flex align-items-start">
                <span className="material-symbols-outlined h3 mb-0">
                  notifications
                </span>
                <span className="badge bg-danger rounded-pill">5</span>
              </div>
            </a>
          </li>
          <li className="nav-item">
            <select className="form-select" aria-label="Default select example">
              <option defaultValue value="en">
                EN
              </option>
              <option value="cn">CN</option>
            </select>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              <img
                src="/assets/avatar.jpg"
                alt="avatar"
                className="rouned-full "
                style={{ width: "3rem", height: "3rem" }}
              />
              <span className="fw-medium"> Hello, Min Khant</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;