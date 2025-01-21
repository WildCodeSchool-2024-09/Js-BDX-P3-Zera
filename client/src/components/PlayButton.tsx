import { Link } from "react-router-dom";
import styles from "../styles/playButton.module.css";

export default function PlayButton() {
  return (
    <Link className={styles.playButton} to={"/game"}>
      Jouer
    </Link>
  );
}
