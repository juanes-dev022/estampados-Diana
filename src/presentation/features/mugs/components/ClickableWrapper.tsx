
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

interface Props {
  to?: string;
  children: ReactNode;
}

const ClickableWrapper = ({ to, children }: Props) => {
  if (!to) {
    return <>{children}</>;
  }

  return (
    <Link
      to={to}
      style={{
        display: "block",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      {children}
    </Link>
  );
};

export default ClickableWrapper;