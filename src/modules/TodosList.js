import React, { Component } from 'react';
import TodoItem from './TodoItem';
import '../styles/TodosList.css';

export default class TodosList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (

          <TodoItem
            key={todo.id}
            Item={todo}
            handleChangeProps={this.props.handleChangeProps}
            deleteTodoProps={this.props.deleteTodoProps}
          />
        ))}
      </ul>
    );
  }
}
