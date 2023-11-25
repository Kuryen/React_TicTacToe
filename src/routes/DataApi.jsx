import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

export default function GameData() {
  const [games, setGames] = useState([]);
  const [platform, setPlatform] = useState("all");
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [tags, setTags] = useState("");
  const [gameId, setGameId] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let url = "https://www.freetogame.com/api/games";
    if (gameId) {
      url = `https://www.freetogame.com/api/game?id=${gameId}`;
    } else {
      url += `?platform=${platform}`;
      if (category) url += `&category=${category}`;
      if (sortBy) url += `&sort-by=${sortBy}`;
      if (tags)
        url = `https://www.freetogame.com/api/filter?tag=${tags}&platform=${platform}`;
    }

    setIsLoaded(false);
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setGames(Array.isArray(json) ? json : [json]);
        setIsLoaded(true);
      });
  }, [platform, category, sortBy, tags, gameId]);

  if (!isLoaded) {
    return <p>Loading games...</p>;
  } else if (games.length === 0) {
    return <p>No games found for this category and platform.</p>;
  }

  return (
    <>
      <Navbar />
      <h1>Explore Free Games</h1>
      <form>
        <label>
          Platform:
          <select
            onChange={(e) => setPlatform(e.target.value)}
            value={platform}
          >
            <option value="all">All</option>
            <option value="pc">PC</option>
            <option value="browser">Browser</option>
          </select>
        </label>

        <label>
          Category:
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option value="">All Categories</option>
            <option value="mmorpg">MMORPG</option>
            <option value="shooter">Shooter</option>
            <option value="moba">MOBA</option>
            <option value="anime">Anime</option>
            <option value="battle-royal">Battle Royal</option>
            <option value="strategy">Strategy</option>
            <option value="fantasy">Fantasy</option>
            <option value="sci-fi">Sci-Fi</option>
            <option value="card">Card Games</option>
            <option value="racing">Racing</option>
            <option value="fightning">Fighting</option>
            <option value="social">Social</option>
            <option value="sports">Sports</option>
          </select>
        </label>

        <label>
          Sort By:
          <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
            <option value="">Default</option>
            <option value="release-date">Release Date</option>
            <option value="popularity">Popularity</option>
            <option value="alphabetical">Alphabetical</option>
            <option value="relevance">Relevance</option>
          </select>
        </label>

        <label>
          Tags:
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Enter tags"
          />
        </label>

        <label>
          Game ID:
          <input
            type="text"
            value={gameId}
            onChange={(e) => setGameId(e.target.value)}
            placeholder="Enter game ID"
          />
        </label>

        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Search
        </button>
      </form>

      <h2>Games List</h2>
      <div>
        {games.map((game) => (
          <div key={game.id}>
            <h3>{game.title}</h3>
            <p>{game.short_description}</p>
          </div>
        ))}
      </div>
    </>
  );
}