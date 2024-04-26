import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <img
          className={styles.logo}
          src="img/65e56c3a635127000f11ee2d_optimized.png"
          alt="logo"
        />
        <div className={styles.headerInfo}>
          <a href="tel:+380633425827">+380633425827</a>
          <span className={styles.flag} title="Ukrainian - Native">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="flag-icons-ua"
              viewBox="0 0 640 480"
            >
              <g fillRule="evenodd" strokeWidth="1pt">
                <path fill="gold" d="M0 0h640v480H0z" />
                <path fill="#0057b8" d="M0 0h640v240H0z" />
              </g>
            </svg>
          </span>
          <span className={styles.flag} title="English - Intermediate/Upper-Intermediate">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="flag-icons-gb"
              viewBox="0 0 640 480"
            >
              <path fill="#012169" d="M0 0h640v480H0z" />
              <path
                fill="#FFF"
                d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z"
              />
              <path
                fill="#C8102E"
                d="m424 281 216 159v40L369 281zm-184 20 6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z"
              />
              <path fill="#FFF" d="M241 0v480h160V0zM0 160v160h640V160z" />
              <path fill="#C8102E" d="M0 193v96h640v-96zM273 0v480h96V0z" />
            </svg>
          </span>
        </div>
      </div>
      <nav className={styles.nav}>
        <NavLink
          className={({ isActive }) =>
            [isActive ? styles.active : "", styles.navLink].join(" ")
          }
          to="/allTodos"
        >
          All Todos
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            [isActive ? styles.active : "", styles.navLink].join(" ")
          }
          to="/deletedTodos"
        >
          Deleted Todos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
