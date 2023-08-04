import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.handleCreate = this.handleCreate.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleRemove(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  }

  handleCreate(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }

  handleUpdate(updatedTodo, id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return updatedTodo;
      } else {
        return todo;
      }
    });
    this.setState({
      todos: updatedTodos,
    });
  }

  //todo: ein Obj von todos array
  handleToggle(id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    this.setState({
      todos: updatedTodos,
    });
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("IN COMPONENT DID UPDATE");
    console.log(prevState.todos);
    console.log(this.state.todos);
  }
  render() {
    const todos = this.state.todos.map((todo) => (
      <Todo
        key={todo.id}
        id={todo.id}
        task={todo.task}
        completed={todo.completed}
        onUpdate={this.handleUpdate}
        onRemove={this.handleRemove}
        onToggle={this.handleToggle}
      />
    ));

    return (
      <div className='TodoList-container'>
        <h1>Todo List!</h1>
        <h5>A Simple React Todo List App</h5>
        {todos}
        <NewTodoForm onCreate={this.handleCreate} />
      </div>
    );
  }
}
