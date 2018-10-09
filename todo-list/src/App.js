import React, { Component } from 'react';
import './App.css';
import classNames from 'classnames';

class App extends Component {
  state = {
    newTodo: '',
    allDone: false,
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

  tickChanged = (e, index) => {
    const todos = [...this.state.todos]; // performs only a shallow copy
    todos[index] = { ...todos[index], done: e.target.checked }; // copy checked value into this object

    this.setState({ todos }); // or todos:todos
  };

  delete = index => {
    const todos = [...this.state.todos]; // performs only a shallow copy
    todos.splice(index, 1);
    this.setState({ todos }); // or todos:todos
  };

  removeAll = () => {
    this.setState({ todos: [] });
  };

  allDone = () => {
    const todos = [...this.state.todos];
    todos.forEach((todo, index) => (todos[index] = { ...todos[index], done: !this.state.allDone }));
    this.setState({ todos, allDone: !this.state.allDone });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={event => this.formSubmitted(event)}>
          <label htmlFor="title">Todo Title: </label>
          <input type="text" onChange={e => this.nameChanged(e)} value={this.state.newTodo} />
          <button type="submit">Add Todo</button>
        </form>
        <button onClick={this.allDone}>{this.state.allDone ? 'Open All Todos' : 'Finish All Todos'}</button>
        <button onClick={this.removeAll}>Remove all</button>
        <ul>
          {this.state.todos.map((todo, index) => {
            return (
              <li key={todo.title} className={classNames({ strikethrough: todo.done })}>
                <input
                  type="checkbox"
                  onChange={e => this.tickChanged(e, index)}
                  checked={this.state.todos[index].done}
                />
                {todo.title} <i className="fas fa-times-circle" onClick={this.delete.bind(this, index)} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
