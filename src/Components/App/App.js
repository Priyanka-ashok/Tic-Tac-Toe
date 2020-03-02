import React from "react";
import "./App.scss";
import Game from "../tictactoe/Game";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Game />
      </div>
    );
  }
}

export default App;
