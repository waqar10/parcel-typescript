import * as React from "react";
import TodoItem from "./TodoItem";
import ES from "./EmptySpace";

/* Class Based Component or Stateful Component */

class Todo extends React.Component{
  state = {
    todo : [
      {
        id: 1,
        text: "Go to Gym",
        done: false
      },
    ]
  };

  createTextNode = () => {
    const text = document.querySelector("#text");
    let value = text.value;
    const obj = {
      text: value,
      done: false,
      id: this.state.todo.length+1
    }
    let nameError;
    if(value === "" || value == null){
      // alert("Input must be filled");
      nameError = "Input must be filled";
    const error = document.getElementById("name_error");
          error.innerHTML = nameError;
    text.onfocus = () =>{
      error.innerHTML = "";
    }
    return false;
    }else{
    this.setState({
      todo: [...this.state.todo,obj]
    })
  }
  text.value ="";
}

  render(){
    return(
      <div className="todo-app">
        <h3>Todo App</h3>
        <hr/>
        <p id="name_error"></p>
        <input  placeHolder="  Enter Your Todo here..." type="text" id="text"/>
        <ES />
        <button className="btn btn-secondary todo-btn" onClick = {this.createTextNode}>
          Add New Todo
        </button>
        <hr/>

        <div className="table-responsive{-sm|-md|-lg|-xl}">
          <table className="table table-bordered">
            <thead className="table-active">
              <tr>
                <th>#</th>
                <th>Todo text</th>
                <th>Due</th>
                <th style={{width:"5rem"}}>Status</th>
              </tr>
            </thead>
            {
              this.state.todo.map(item => {
                return (
                  <TodoItem text = {item.text} done = {item.done} id = {item.id} />
                )
              })
            }
          </table>
       </div>
      </div>
    );
  }
}

export default Todo;