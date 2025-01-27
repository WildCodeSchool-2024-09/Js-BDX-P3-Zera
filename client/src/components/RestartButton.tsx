import { Link } from "react-router-dom";
import "../styles/restartButton.css";
export default function RestartButton() {
  return (
    <Link className="restart-button" to={""}>
      Reprendre
    </Link>
  );
}
