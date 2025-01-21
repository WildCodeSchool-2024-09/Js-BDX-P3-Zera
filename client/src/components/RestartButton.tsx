import { Link } from "react-router-dom";
import styles from "../styles/restartButton.module.css";
export default function RestartButton() {
  return (
    <Link className={styles.restartButton} to={""}>
      Reprendre
    </Link>
  );
}
