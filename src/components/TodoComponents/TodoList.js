import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      {props.dailyRoutine.map(items => (
        <Todo key={items.id} item={items} toggleItem={props.toggleItem} />
      ))}

      <button onClick={props.clearPurchased}>Clear Purchased</button>
    </div>
  );
};
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

export default TodoList;
