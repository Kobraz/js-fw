import { useEffect, useState } from 'react';
import { API_TODOS_URL } from '../../shared/apis';
import Todo from '../Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getTodos() {
      try {
        setIsLoading(true);
        const response = await fetch(API_TODOS_URL);
        const json = await response.json();
        setTodos(json);
        console.log(json);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getTodos();
  }, []);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} isCompleted={todo.completed} title={todo.title} />
      ))}
    </div>
  );
}

export default TodoList;
