import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
// import "./TodoList.css";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
  }

  remove(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  }

  // edit(id) {
  //   const updatedTodos = this.state.todos.map((todo) => {
  //     if (todo.id === id) {
  //       return {
  //         ...todo,
  //         editing: true,
  //       };
  //     }
  //     return todo;
  //   });

  //   this.setState({
  //     todos: updatedTodos,
  //   });
  // }

  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }

  render() {
    const todos = this.state.todos.map((todo) => (
      <Todo key={todo.id} id={todo.id} task={todo.task} remove={this.remove} />
    ));

    return (
      <div className='TodoList-container'>
        <h1>Todo List!</h1>
        <h5>A Simple React Todo List App</h5>
        <hr className='line' />
        {todos}
        <NewTodoForm createTask={this.create} />
      </div>
    );
  }
}
