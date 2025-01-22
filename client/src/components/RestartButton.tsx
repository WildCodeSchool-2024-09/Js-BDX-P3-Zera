import { Link } from "react-router-dom";
import "../assets/styles/restartButton.css";
export default function RestartButton() {
  return (
    <Link className="restart-button" to={""}>
      Reprendre
    </Link>
  );
}
