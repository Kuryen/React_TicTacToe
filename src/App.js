import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TicTacToe from "./pages/TicTacToe";
import GameData from "./pages/DataApi";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="react_tictactoe" element={<TicTacToe />} />
          <Route path="data_api" element={<GameData />} />
        </Route>
      </Routes>
    </>
  );
}
