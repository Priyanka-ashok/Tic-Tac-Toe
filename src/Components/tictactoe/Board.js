import React, { Component } from 'react'
import Square from "./square";
export class Board extends Component {
  rendersquareComp(i){
    return (
    <Square value = {this.props.squares[i]}
    onClick = {()=>this.props.onClick(i)}
  />
    )
  }
  render() {
    return (
      <>
        <div className="board-row">
        {this.rendersquareComp(0)}
        {this.rendersquareComp(1)}
        {this.rendersquareComp(2)}
        </div>
        <div className="board-row">
        {this.rendersquareComp(3)}
        {this.rendersquareComp(4)}
        {this.rendersquareComp(5)}
        </div>
        <div className="board-row">
        {this.rendersquareComp(6)}
        {this.rendersquareComp(7)}
        {this.rendersquareComp(8)}
        </div>
      </>
    )
  }
}

export default Board
