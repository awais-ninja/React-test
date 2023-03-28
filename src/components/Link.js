import { Link as RLink } from "react-router-dom";

export default function Link({ to, children, ...rest }) {
  const path = String(to);
  if (path.startsWith("http")) {
    return (
      <a href={path} target="_blank" rel="noreferrer" {...rest}>
        {children}
      </a>
    );
  }
  return (
    <RLink to={path} {...rest}>
      {children}
    </RLink>
  );
}
