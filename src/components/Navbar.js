import React from "react";

function Navbar(props) {
  return (
    <div className="navbar">
      <h1 className="title">Clicky Game</h1>
      <img alt= ""src ="https://upload.wikimedia.org/wikipedia/en/c/c8/Rick_and_Morty_logo.png"></img>
      <div className="scores">
      Score: {props.score} Highscore: {props.highscore}
    </div>
    </div>
  );
}

export default Navbar;
