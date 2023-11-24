import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="flex_container">
        <Link className="link" to={"/"}>
          Home
        </Link>
        |
        <Link className="link" to={"/react_tictactoe"}>
          Play Tic-Tac-Toe
        </Link>
        |
        <Link className="link" to={"/data_api"}>
          Browse Free-to-Play Games
        </Link>
      </div>
      <hr />
    </>
  );
}
