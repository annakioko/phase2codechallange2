import React from "react";

function ReleaseButton({ bot, onRelease }) {
  const handleClick = () => {
    onRelease(bot.id);
  };

  return <button onClick={handleClick}>Release from enlistment</button>;
}

export default ReleaseButton;
