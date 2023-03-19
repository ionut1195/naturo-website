import { Header } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { useOpenCartStore } from "../../state/useOpenCartStore";
const Links = ({
  containerClassName,
  mobile = false,
  closeMenu,
}: {
  containerClassName: string;
  mobile?: boolean;
  closeMenu?: () => void;
}) => {
  const { openCart } = useOpenCartStore();

  return (
    <ul className={containerClassName}>
      {mobile || openCart ? (
        <AiOutlineClose
          onClick={() => closeMenu && closeMenu()}
          className={styles.closeIcon}
        />
      ) : undefined}
      <li key="home">
        <Link
          onClick={() => closeMenu && closeMenu()}
          className={`${styles.link} ${
            openCart ? styles.openCartLink : undefined
          }`}
          to="/"
        >
          Home
        </Link>
      </li>
      <li key="store">
        <Link
          onClick={() => closeMenu && closeMenu()}
          className={styles.link}
          to="/store"
        >
          Store
        </Link>
      </li>
      <li key="about">
        <a
          onClick={() => closeMenu && closeMenu()}
          className={styles.link}
          href="#about"
        >
          About
        </a>
      </li>
      <li key="contact">
        <a
          onClick={() => closeMenu && closeMenu()}
          className={styles.link}
          href="#contact"
        >
          Contact
        </a>
      </li>
    </ul>
  );
};
const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { openCart } = useOpenCartStore();
  return (
    <Header
      id="header"
      className={`${styles.header} ${
        openCart ? styles.headerOpenCart : undefined
      }`}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className={styles.headerContent}>
        <div className={styles.logo} />
        <Links containerClassName={styles.navLinks} />
        <Links
          closeMenu={() => setOpenMenu(false)}
          mobile
          containerClassName={`${styles.mobileNavLinks} ${
            openMenu ? styles.mobileNavOpen : undefined
          }`}
        />
        <AiOutlineMenu
          onClick={() => setOpenMenu(true)}
          className={styles.menu}
        />
      </div>
    </Header>
  );
};

export default NavBar;
