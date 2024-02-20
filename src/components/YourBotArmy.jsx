import React, { useState, useEffect } from "react";

const YourBotArmy = ({ onRelease }) => {
  const [army, setArmy] = useState([]);

  useEffect(() => {
   
    fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then((data) => setArmy(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); 
  const handleRelease = (releasedBot) => {
    
    const updatedArmy = army.filter((bot) => bot.id !== releasedBot.id);
    setArmy(updatedArmy);

    onRelease(releasedBot);
  };

  return (
    <div>
      <h2>Your Bot Army</h2>
      <ul>
        {army.map((bot) => (
          <li key={bot.id}>
            {bot.name} - {bot.bot_class}
            <button onClick={() => handleRelease(bot)}>Release</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YourBotArmy;
