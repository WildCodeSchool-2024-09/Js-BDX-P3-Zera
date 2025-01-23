import { Link } from "react-router-dom";
import "../assets/styles/playButton.css";

export default function PlayButton() {
  return (
    <Link className="play-button" to={"/game"}>
      Jouer
    </Link>
  );
}
