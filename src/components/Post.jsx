import Link from "./Link";

export default function Post({ data }) {
  return (
    <div className="container my-5">
      <div className="p-5 text-center bg-body-tertiary rounded-3">
        <h1 className="text-body-emphasis"> {data.heading}</h1>
        <p className="lead">{data.description}</p>
        <h6 className="lead">{data.bottomline}</h6>

        <Link
          to={data.path}
          className={data.class}
          role={data.role}
          aria-pressed="true"
        >
          {data.title}
        </Link>
      </div>
    </div>
  );
}
