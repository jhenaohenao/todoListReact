import React from 'react';

import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { CreateToDoButton } from './CreateToDoButton';
import { ToDoItem } from './ToDoItem';

const defaultTodos = [
  { text: 'Cortar Cebolla', completed: true},
  { text: 'Cortar Tomate', completed: false},
  { text: 'Cortar Pimenton', completed: true},
  { text: 'Cortar Ajo', completed: false},
  { text: 'Cortar Papa', completed: true},
];

function App() {
  return ( 
  <React.Fragment>
    <ToDoCounter completed={16} total={25}/>
    <ToDoSearch />
    <ToDoList>
      {defaultTodos.map(todo =>(
           <ToDoItem 
           key={todo.text}
           text={todo.text}
           completed={todo.completed}
           /> 
      ))}
    </ToDoList>
    <CreateToDoButton />  
  </React.Fragment>

  );
}






export default App;
