import React, { Component } from 'react';
import { List, Checkbox } from 'semantic-ui-react';
import { Progress } from 'semantic-ui-react';

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [{value:'a', done: false}, {value:'b', done: true}, {value:'c', done: false}],
      done: 1,
      percent: 10,
      newItem: 'Hayden',
    }
  }
  updateProgress = (e) => {
    const selected = e.target.value;
    let updated = this.state.todos.slice();
    if (updated[selected].done) {
      updated[selected].done = false;
    } else {
      updated[selected].done = true;
    }
    this.setState({todos: updated});
    debugger;
  }
  addToList = () => {
    let list = this.state.todos;
    list.unshift({value: this.state.newItem, done: false});
    this.setState({todos: list});
  }
  render() {
    return (
      <div>
        <Progress percent={this.state.percent} />
        <List>
          {this.state.todos.map( (todo, i) => {
            return <List.Item>{todo.value}<Checkbox value={i} checked={todo.done} onClick={this.updateProgress}/></List.Item>
          })}
        </List>
        <div>
          <input></input>
          <button onClick={this.addToList}>Add</button>
        </div>
      </div>
    )
  }
}

export default Todo;
