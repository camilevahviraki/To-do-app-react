/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import '../styles/TodoItem.css';

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.Item = this.props.Item;
  }

  render() {
    return (
      <li key={this.Item.id}>
        <input
          type="checkbox"
          onChange={() => this.props.handleChangeProps(this.Item.id)}
          cheCked={this.Item.completed}
        />
        <p>{this.Item.title}</p>
        <button
          type="button"
          onClick={() => this.props.deleteTodoProps(this.Item.id)}
        >
          Delete
        </button>
      </li>
    );
  }
}
