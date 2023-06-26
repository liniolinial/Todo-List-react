import React, { Component } from "react";
import "./Todo.css";
// import NewTodoForm from "./NewTodoForm";

export default class Todo extends Component {
  render() {
    return (
      <div>
        <div>
          <div>{this.props.task}</div>
          <button onClick={this.props.editBtn}>edit</button>
          <button onClick={this.props.removeBtn}>x</button>
        </div>
        <div className='Todo-container'></div>

        {/* <button onClick={this.props.removeBox}></button> */}
      </div>
    );
  }
}
