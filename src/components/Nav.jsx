import Link from "./Link";

export default function Nav({ data }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {data.siteTitle.text}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {data.nav.map((item, index) => {
              return (
                <li className="list-item">
                  <Link to={item.path} className="nav-link" key={index}>
                    {item.text}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="d-flex">
            {data.specialButtons.map((item, index) => {
              return (
                <Link
                  to={item.path}
                  className="btn btn-primary btn-md ms-2"
                  key={index}
                >
                  {item.text}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
