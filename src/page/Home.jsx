import Main from "../components/layouts/Main";
import Link from "../components/Link";

const Card = () => {
  return (
    <Link to="/about" className="text-dark text-decoration-none col">
      <div className="card h-100">
        <img src="../img/new1.jpg" className="card-image-top" alt="Some TIME" />
        <div className="card-body">
          <p className="card-text">RHis is a image</p>
        </div>
      </div>
    </Link>
  );
};

export default function Home() {
  return (
    <div>
      <Main>
        <Card />
      </Main>
    </div>
  );
}
