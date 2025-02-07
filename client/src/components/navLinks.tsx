import { Link } from "react-router-dom";

type NavigationLinksProps = {
  isMobile?: boolean;
  closeMenu?: () => void;
};

function NavigationLinks({
  isMobile = false,
  closeMenu,
}: NavigationLinksProps) {
  return (
    <ul className={isMobile ? "menu-list" : "nav-list"}>
      <li>
        <Link
          to="/"
          className={isMobile ? "menu-link" : "nav-link"}
          onClick={() => isMobile && closeMenu && closeMenu()}
        >
          Accueil
        </Link>
      </li>
      <li>
        <Link
          to="/profil"
          className={isMobile ? "menu-link" : "nav-link"}
          onClick={() => isMobile && closeMenu && closeMenu()}
        >
          Profil
        </Link>
      </li>
      <li>
        <Link
          to="/team"
          className={isMobile ? "menu-link" : "nav-link"}
          onClick={() => isMobile && closeMenu && closeMenu()}
        >
          Team
        </Link>
      </li>
      <li>
        <Link
          to="/boutique"
          className={isMobile ? "menu-link" : "nav-link"}
          onClick={() => isMobile && closeMenu && closeMenu()}
        >
          Boutique
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard"
          className={isMobile ? "menu-link" : "nav-link"}
          onClick={() => isMobile && closeMenu && closeMenu()}
        >
          Dashboard
        </Link>
      </li>
    </ul>
  );
}

export default NavigationLinks;
