import React from 'react'
import './App.css';

class TodoItem extends React.Component {
    render() {
      return (
        <>
          <ul>
            {this.props.items.map(item => (
              <li key={item.id}>{item.text}</li>
              // {item.complete? "comp" : "notcomp"}</li>
            ))}
          </ul>
        </>   
      );
    }
  }
  


export default TodoItem