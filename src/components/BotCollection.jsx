import React, { useState, useEffect } from "react";
import Enlist from "./Enlist";
import BotProfile from "./BotProfile";

const BotCollection = () => {
  const [bots, setBots] = useState([]);

  
  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.log(error));
  }, []); //empty depandcy array so it can only run once

  return (
    <div>
      <h2>Available Bots</h2>
      <div>
        {bots.map((bot) => (
          <div key={bot.id}>
            <BotProfile bot={bot} />
            <Enlist bot={bot} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
