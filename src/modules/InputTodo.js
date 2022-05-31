import React, { Component } from 'react';
import '../styles/InputTodo.css';

class InputTodo extends Component {
  state = {
    title: '',
  };

    ChangeInput = (e) => {
      this.setState({
        title: e.target.value,
      });
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.addTodoItem(this.state.title);
      this.setState({ title: '' });
    };

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Add Todo..."
            value={this.state.title}
            name="title"
            onChange={this.ChangeInput}
          />
          <button type="button">Submit</button>
        </form>
      );
    }
}
export default InputTodo;
