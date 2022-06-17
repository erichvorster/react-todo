import React, { useState, useEffect } from "react";
import Button from "./Button";
import moment from "moment";
import Todo from "./Todo";

const Filter = ({todos, timeline}) => {
const [filteredTodos, SetFilteredTodos] = useState("")




useEffect(() => {

    let data;

    const todayDateFormated = moment().format('YYYY-MM-DD')

    console.log(todayDateFormated);

    if(timeline === 'Today'){
        data = todos.filter(todo => todo.date === todayDateFormated)
    }else if(timeline === 'Next 7 days'){
        data = todos.filter(todo => {
            const todoDate = moment(todo.date, "YYYY-MM-DD")
            const todayDate = moment(todayDateFormated, 'YYYY-MM-DD')

            const diffDays = todoDate.diff(todayDate, 'days')

            return diffDays >=0 && diffDays < 7
        })
    } else if( timeline === 'All'){
        data = todos
    } else{
        data = todos.filter(todo => todo.projectName === timeline)
    }
    SetFilteredTodos(data)
   
}, [todos, timeline])

// function filter(todos, timeline){
//     let data;

//     const todayDateFormated = moment().format('YYYY-MM-DD')

//     console.log(todayDateFormated);

//     if(timeline === 'Today'){
//         data = todos.filter(todo => todo.date === todayDateFormated)
//     }else if(timeline === 'Next 7 days'){
//         data = todos.filter(todo => {
//             const todoDate = moment(todo.date, "YYYY-MM-DD")
//             const todayDate = moment(todayDateFormated, 'YYYY-MM-DD')

//             const diffDays = todoDate.diff(todayDate, 'days')

//             return diffDays >=0 && diffDays < 7
//         })
//     } else if( timeline === 'All'){
//         data = todos
//     } else{
//         data = todos.filter(todo => todo.projectName === timeline)
//     }
// }

// filter(todos,timeline)



  return (
    // <Todo filteredTodos={filteredTodos}/>
      <h1>Text</h1>
  );
};

export default Filter;
