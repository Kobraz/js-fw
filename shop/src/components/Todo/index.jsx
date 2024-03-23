import React from 'react';

function Todo(props) {
  console.log(props);
  return (
    <div>
      <p>{props.title}</p>
      <input type='checkbox' checked={props.isCompleted} />
    </div>
  );
}

export default Todo;
