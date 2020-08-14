// import React, { Component } from "react";
// import { observer, inject } from "mobx-react";
// import TodoEditFormView from "../view/LoginView";
// import generateId from "../IDGenerator";

// @inject("TodoStore")
// @observer
// class LoginContainer extends Component {
//   onSetTodoProps = (name, value) => {
//     //TodoStore의 setTodoProp(name, value) 호출
//     const { TodoStore } = this.props;
//     TodoStore.onSetTodoProps(name, value);
//   };

//   onAddTodo = () => {
//     //TodoStore의 addTodo(todo)호출
//     const { TodoStore } = this.props;
//     let todo = TodoStore.gettodo;
//     todo = { ...todo, id: generateId(5) };
//     TodoStore.addTodo(todo);
//   };

//   // 현재 만들어야하는 기능중에서 사용되지않고있음
//   // selectTodo = (id) => {
//   //   this.todo = this.props.TodoStore.gettodo;
//   //   this.props.TodoStore.selectTodo(id);
//   // };

//   render() {
//     const todo = this.props.TodoStore.gettodo;
//     console.log(todo);
//     //const todo = this.props.TodoStore; //todo->TodoStore
//     return (
//       <TodoEditFormView
//         todo={todo}
//         onSetTodoProps={this.onSetTodoProps}
//         onAddTodo={this.onAddTodo}
//       />
//     );
//   }
// }

import React, { Component } from 'react';
import LoginView from "../view/LoginView";

class LoginContainer extends Component {
    render() {
        return (
            <div>
                <LoginView />
            </div>
        );
    }
}
export default LoginContainer;