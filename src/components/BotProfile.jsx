import React from "react";

function BotProfile ({ bot }) {
  return (
    <div>
      <h3>{bot.name}</h3>
      <img src={bot.avatar_url} alt={bot.name} />
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
    </div>
  );
};

export default BotProfile;
