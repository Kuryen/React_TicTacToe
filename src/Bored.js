import React, { useState, useEffect } from "react";

function Bored() {
  const [activity, setActivity] = useState(null);

  const fetchActivity = () => {
    fetch("https://www.boredapi.com/api/activity")
      .then((response) => response.json())
      .then((data) => setActivity(data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div>
      <button onClick={fetchActivity}>Get Random Activity</button>
      {activity && (
        <div>
          <h3>Activity: {activity.activity}</h3>
          <p>Type: {activity.type}</p>
          <p>Participants: {activity.participants}</p>
        </div>
      )}
    </div>
  );
}

export default Bored;