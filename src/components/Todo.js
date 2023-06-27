import React, { Component } from "react";
import "./Todo.css";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      task: this.props.task,
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleRemove() {
    this.props.remove(this.props.id);
  }
  handleUpdate() {
    this.setState({
      editing: true,
    });
  }

  handleToggle(e) {
    this.props.onToggle(this.props.id);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onUpdate(
      { task: this.state.task, id: this.props.id },
      this.props.id,
    );
    this.setState({
      ...this.state,
      editing: false,
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
                value={this.state.task}
                onChange={this.handleChange}
                id='task'
              />
            </label>
            <button type='submit'>save</button>
          </form>
        </div>
      );
      return result;
    }
    return (
      <div className='Todo-container'>
        <div>
          <div
            className={this.props.completed ? "completed" : ""}
            onClick={this.handleToggle}>
            {this.state.task}
          </div>
          <button onClick={this.handleUpdate}>edit</button>
          <button onClick={this.handleRemove}>x</button>
        </div>
      </div>
    );
  }
}
