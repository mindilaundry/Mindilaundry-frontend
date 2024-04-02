import { Link, LinkProps } from "react-router-dom";

interface LinksProps extends LinkProps {
  title: string;
  className?: string;
}

const LinkButton = ({ to, title, className }: LinksProps) => {
  return (
    <Link to={to} className={`${className}`}>
      {title}
    </Link>
  );
};

export default LinkButton;
