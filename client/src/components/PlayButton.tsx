import { Link } from "react-router-dom";
import "../styles/playButton.css";
export default function PlayButton() {
  return (
    <Link className="play-button" to={"/lecture"}>
      Jouer
    </Link>
  );
}
