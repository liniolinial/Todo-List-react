import React, { Component } from "react";

import "./NewTodoForm.css";

import { v4 as uuidv4 } from "uuid";

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const newTodo = { ...this.state, id: uuidv4(), completed: false };
    this.props.onCreate(newTodo);
    this.setState({
      task: "",
    });
  }

  render() {
    return (
      <form
        className='NewTodoForm-primary-container'
        onSubmit={this.handleSubmit}>
        <h4>New Todo</h4>
        <div className='NewTodoForm-secondary-container'>
          <label htmlFor='task'>
            <input
              type='text'
              name='task'
              value={this.state.task}
              onChange={this.handleChange}
              id='task'
            />
          </label>
          <button>ADD TODO</button>
        </div>
      </form>
    );
  }
}
