import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      // changeable: false,
    };
    this.create = this.create.bind(this);
  }
  remove(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  }

  edit(id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        <NewTodoForm />;
      }
      this.setState({
        todos: updatedTodos,
      });
    });

    return updatedTodos;
  }
  // hier toggle func

  create(newTodos) {
    this.setState({
      todos: [...this.state.todos, newTodos],
    });
  }
  render() {
    const todos = this.state.todos.map((todo) => (
      <Todo
        key={todo.id}
        task={todo.task}
        editBtn={() => this.edit(todo.id)}
        removeBtn={() => this.remove(todo.id)}
      />
    ));

    return (
      <div>
        <h1>Todo List!</h1>
        <h5>A Simple React Todo List App</h5>
        <hr className='line' />
        {/* {!this.state.changeable} */}
        {todos}
        <NewTodoForm createTask={this.create} />
      </div>
    );
  }
}
