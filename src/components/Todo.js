import React, { Component } from "react";
// import "./Todo.css";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleRemove() {
    this.props.remove(this.props.id);
  }
  handleToggle() {
    this.setState({
      editing: true,
    });
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const reTodo = { ...this.props.task, ...this.props.id };
    this.props.createTask(reTodo);
    this.setState({
      task: reTodo,
    });
  }
  render() {
    let result;
    if (this.state.editing) {
      result = (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor='task'>
              <input
                type='text'
                name='task'
                value={this.props.task}
                onChange={this.handleChange}
                id='task'
              />
            </label>
          </form>
        </div>
      );
      return result;
    }
    return (
      <div className='Todo-container'>
        <div>
          <div>{this.props.task}</div>
          <button onClick={this.handleToggle}>edit</button>
          <button onClick={this.handleRemove}>x</button>
        </div>
      </div>
    );
  }
}
