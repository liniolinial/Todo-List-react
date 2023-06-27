import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      editing: false,
    };
    this.create = this.create.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  remove(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  }
  //
  handleEdit(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSave(evt) {
    evt.preventDefault();
    const renewTodo = { ...this.state, update: "" };
    this.props.createTask(renewTodo);
    this.setState({
      todos: (this.task += renewTodo),
    });
  }
  //
  edit(id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          editing: true,
        };
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos,
    });
  }
  //

  create(newTodos) {
    this.setState({
      todos: [...this.state.todos, newTodos],
    });
  }

  render() {
    const { editing } = this.state;
    const todos = this.state.todos.map((todo) => (
      <Todo
        key={todo.id}
        task={todo.task}
        editBtn={() => this.edit(todo.id)}
        {...(editing === true ? (
          <form onSubmit={this.handleSave}>
            <label htmlFor={todo.id}>
              <input
                type='text'
                value={todo.task}
                name={todo.id}
                onChange={this.handleEdit}
              />
            </label>
            <button>Save</button>
            <button onClick={() => this.cancelEdit(todo.id)}>Cancel</button>
          </form>
        ) : (
          "sdf"
        ))}
        removeBtn={() => this.remove(todo.id)}
      />
    ));
    // const { editing } = this.state;

    return (
      <div className='TodoList-container'>
        <h1>Todo List!</h1>
        <h5>A Simple React Todo List App</h5>
        <hr className='line' />
        {todos}
        {/* {this.editing} ? (
        <form onSubmit={this.handleSave}>
          <label htmlFor={todos.id}>
            <input
              type='text'
              value={todos.task}
              name={todos.id}
              onChange={this.handleEdit}
            />
          </label> */}
        {/* <button>Save</button> */}
        {/* <button onClick={() => this.cancelEdit(todos.id)}>Cancel</button> */}
        {/* </form>
        ) : (<p>sdf</p>
        ) */}
        <NewTodoForm createTask={this.create} />
      </div>
    );
  }
}
