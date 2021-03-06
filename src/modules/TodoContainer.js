import React from 'react';
import TodosList from './TodosList';
import InputTodo from './InputTodo';
import '../styles/TodoContainer.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: 3,
          title: 'Deploy to live server',
          completed: false,
        }],
    };
  }

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        console.log('todos', todo);
        return todo;
      }),
    }));
  };

    delTodo = (id) => {
      this.setState({
        todos: [
          ...this.state.todos.filter((todo) => todo.id !== id),
        ],
      });
    };

    addTodoItem = (title) => {
      const newTodo = {
        id: this.state.todos.length + 1,
        title,
        completed: false,
      };
      this.setState({
        todos: [...this.state.todos, newTodo],
      });
      console.log('new', newTodo);
    };

    render() {
      return (
        <div>
          <InputTodo
            addTodoItem={this.addTodoItem}
          />
          <TodosList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.delTodo}
          />
        </div>
      );
    }
}

export default TodoItem;
