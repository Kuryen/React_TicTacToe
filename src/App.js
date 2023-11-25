import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import TicTacToe from "./routes/TicTacToe";
import GameData from "./routes/DataApi";
import Navbar from "./Navbar";

export default function App() {
  return (
    <>
    <Navbar />
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
