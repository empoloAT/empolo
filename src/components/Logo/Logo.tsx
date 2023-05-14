import classNames from "classnames";
import Image from "next/image";

import styles from "./logo.module.scss";
import logoSrc from "./Logo.svg";
import Link from "next/link";

type Props = {
  size?: "s";
};

export const Logo = ({size}: Props) => {
  const logoSize = classNames({ [styles.sizeS]: size === "s" });
  const logoClassName = classNames(
    styles.component,
    logoSize
  );

  return (
    <div className={logoClassName}>
      <Link href="/">
        <Image
          src={logoSrc}
          alt="Logo"
          fill
        />
      </Link>
    </div>
  );
};
