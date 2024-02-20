import React, { useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";

function App() {
  const [displayBotCollection, setDisplayBotCollection] = useState(true);

  const toggleDisplay = () => {
    setDisplayBotCollection(!displayBotCollection);
  };

  return (
    <div>
      <h1>Welcome to Bot Battlr!</h1>
      <button onClick={toggleDisplay}>
        {displayBotCollection ? "View Your Bot Army" : "View Bot Collection"}
      </button>
      {displayBotCollection ? <BotCollection /> : <YourBotArmy />}
    </div>
  );
}

export default App;
