/Users/thomas/Desktop/Wild Code School/projet-3/Js-BDX-P3-Zera/client/src/components/PlayButton.tsximport { Link } from "react-router-dom"; 
import "../assets/styles/playButton.css";

export default function PlayButton() {
  return (
    <Link className="play-button" to={"/game"}>
      Jouer
    </Link>
  );
}