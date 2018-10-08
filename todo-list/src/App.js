import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    newTodo: '',
    todos: [
      {
        title: 'Learn Java',
        done: false
      },
      {
        title: 'Learn React',
        done: false
      },
      {
        title: 'Learn Python',
        done: false
      }
    ]
  };

  formSubmitted = e => {
    e.preventDefault();

    if (this.state.newTodo !== '') {
      this.setState({
        todos: [
          ...this.state.todos,
          {
            title: this.state.newTodo,
            done: false
          }
        ],
        newTodo: ''
      });
    }
  };

  nameChanged = e => {
    this.setState({ newTodo: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={event => this.formSubmitted(event)}>
          <label htmlFor="title">Todo Title: </label>
          <input type="text" onChange={e => this.nameChanged(e)} value={this.state.newTodo} />
          <button type="submit">Submit</button>
        </form>
        <ul>
          {this.state.todos.map(todo => {
            return <li key={todo.title}>{todo.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
