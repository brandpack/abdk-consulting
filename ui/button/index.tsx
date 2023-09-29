import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { IButtonProps } from "./interface";

const Button: React.FC<IButtonProps> = ({
  type,
  onClick,
  href,
  children,
  backgroundColor,
  borderColor,
  color,
  includeSvg = true,
}) => {
  const buttonStyle = {
    backgroundColor: backgroundColor,
    borderColor: borderColor,
    color: color,
  };

  return (
    <Link href={href} className={styles.RequestBtn} style={buttonStyle}>
      <span>{children}</span>
      {includeSvg && ( 
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="13"
          viewBox="0 0 14 13"
          fill="none"
        >
          <path
            d="M1.58118 12.1562L12.7374 1M12.7374 1H0.737427M12.7374 1V13"
            stroke="white"
            strokeWidth="1.8"
            strokeLinejoin="bevel"
          />
        </svg>
      )}
    </Link>
  );
};

export default Button;
