import React from "react";

function EnlistButton({ bot, onEnlist }) {
  const handleClick = () => {
    onEnlist(bot);
    window.alert("Bot has been added to your army!");
  };

  return <button onClick={handleClick}>Enlist</button>;
}

export default EnlistButton;
