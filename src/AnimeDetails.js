import React, { useState, useEffect } from "react";

function AnimeDetails() {
  const [animeId, setAnimeId] = useState("");
  const [animeDetails, setAnimeDetails] = useState(null);

  useEffect(() => {
    if (!animeId) return; // Don't fetch if the ID is empty

    fetch(
      `https://cdn.animenewsnetwork.com/encyclopedia/api.xml?anime=${animeId}`
    )
      .then((response) => response.text())
      .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
      .then((data) => {
        // Process and extract the desired information from the XML data
        const title = data.querySelector(
          'anime title[type="Main title"]'
        ).textContent;
        setAnimeDetails(title);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [animeId]); // Dependency array includes animeId to trigger effect when it changes

  return (
    <div>
      <br />
      <h2>Anime Details</h2>
      <input
        type="text"
        value={animeId}
        onChange={(e) => setAnimeId(e.target.value)}
        placeholder="Enter Anime ID"
      />
      <button onClick={() => setAnimeId(animeId)}>Search</button>
      {animeDetails ? (
        <p>{animeDetails}</p>
      ) : (
        <p>Loading or no anime selected...</p>
      )}
    </div>
  );
}

export default AnimeDetails;