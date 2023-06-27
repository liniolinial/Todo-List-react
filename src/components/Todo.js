import React, { Component } from "react";
import "./Todo.css";

export default class Todo extends Component {
  render() {
    return (
      <div>
        <div className='Todo-container'>
          <div>{this.props.task}</div>
          <div>
            <button onClick={this.props.editBtn}>edit</button>
            <button onClick={this.props.removeBtn}>x</button>
          </div>
        </div>

        {/* <button onClick={this.props.removeBox}></button> */}
      </div>
    );
  }
}
