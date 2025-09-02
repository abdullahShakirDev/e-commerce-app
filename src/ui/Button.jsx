import { Link } from "react-router-dom";

function Button({ children, disabled, to, type = "primary", onClick }) {
  const base =
    "rounded-lg cursor-pointer text-text text-sm font-medium hover:shadow-lg hover:bg-red-500 transition-all";

  const styles = {
    primary: base + " bg-secondary2 py-3 px-11 my-1.5",
    secondary: base + "w-full bg-secondary2 py-3 px-11 my-1.5",
    small: base + " w-full bg-secondary2 py-1.5 px-3",
    round:
      base + " bg-secondary2 py-1 px-3 md:px-3.5 md:py-2 text-sm rounded-full",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
