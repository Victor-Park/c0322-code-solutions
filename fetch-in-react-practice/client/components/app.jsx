import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    fetch('/api/todos')
      .then(res => res.json())
      .then(todos => this.setState({ todos: todos }));
  }

  addTodo(newTodo) {
    fetch('/api/todos', {
      method: 'POST',
      body: JSON.stringify(newTodo),
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(todos => {
        let copyArr = this.state.todos;
        copyArr = copyArr.concat(todos);
        this.setState({ todos: copyArr });
      });
  }

  toggleCompleted(todoId) {
    const index = this.state.todos.findIndex(index => index.todoId === todoId);
    const status = this.state.todos[index].isCompleted;
    const obj = { isCompleted: !status };
    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      body: JSON.stringify(obj),
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(updatedTodo => {
        const copyArr = this.state.todos;
        copyArr[index] = updatedTodo;
        this.setState({ todos: copyArr });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
