import "./TodoItem.css";

function ToDoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      >
        V
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete">X</span>
    </li>
  );
}

export { ToDoItem };

// import './TodoItem.css';

// function ToDoItem(props){
//     return (
//       <li>
//         <span>V</span>
//         <p>{props.text}</p>
//         <span>X</span>
//       </li>
//     );
//   }

//   export {ToDoItem}