import styles from "./header.module.css";

import Logo from "../assets/logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo do Ignite" width={64.08} height={60.76} />
      Ignite Feed
    </header>
  );
}
