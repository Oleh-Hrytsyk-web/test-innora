import classNames from "classnames";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  className?: string;
  disabled?: boolean;
  isLink?: boolean;
  path?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

function Button({
  onClick,
  text,
  className,
  disabled = false,
  isLink = false,
  path = "",
  type,
}: ButtonProps) {
  const buttonClass = classNames(
    styles.button,
    disabled && styles.buttonDisabled,
    className
  );
  if (isLink) {
    return (
      <Link className={buttonClass} to={path}>
        {text}
      </Link>
    );
  } else {
    return (
      <button
        className={buttonClass}
        onClick={onClick}
        disabled={disabled}
        type={type}
      >
        {text}
      </button>
    );
  }
}

export default Button;
