import Link from "./Link";

export default function Footer({ data }) {
  return (
    <div>
      <div className="container">
        <footer className="py-3 my-4">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            {data.footerdata.map((item, index) => {
              return (
                <li className="list-item">
                  <Link to={item.path} className="nav-link" key={index}>
                    {item.text}
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="text-center text-body-secondary">
            {data.siteTitle.text}
          </p>
        </footer>
      </div>
    </div>
  );
}

/*<li class="nav-item">
<a href="#" class="nav-link px-2 text-body-secondary">
  Home
</a>
</li> */
