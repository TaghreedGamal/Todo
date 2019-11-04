import React from 'react'
import TodoItem from './TodoItem';
import './App.css';


class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            todoitems:[],
            text:"",
            completed:false
        }
    }
    addNewItem(e){
        e.preventDefault();
        if (!this.state.text.length) {
        return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now(),
            // completed:false
        };
        this.setState(state => ({
            todoitems: state.todoitems.concat(newItem),
            text: '',
            // completed:false
        }));
    }
    handleChange(e) {
        this.setState({ text: e.target.value });
      }
    
    render(){
        const {items}=this.state;
       return(
           <div className="todo">
                <h1 className="todo-title">Todo List</h1>
                <form onSubmit={this.addNewItem.bind(this)}>
                    <input
                        type="text" 
                        name="todoText" 
                        placeholder="Type here ..."
                        onChange={this.handleChange.bind(this)}
                        value={this.state.text}
                    />
                </form>
                <div className="listItems">
                    <TodoItem items={this.state.todoitems}/>
                </div>          
           </div>
       )
   }

}



export default Todo