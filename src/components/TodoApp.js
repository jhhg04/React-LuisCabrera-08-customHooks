import useTodos from '../hooks/useTodos';

const initialTodos = [
  { id: 1, title: 'Learn React' },
  { id: 2, title: 'Learn Node' },
];

const TodoApp = () => {
  const [todos, addTodo, deleteTodo] = useTodos(initialTodos);

  return (
    <div>
      <button onClick={() => addTodo({ title: 'New Task' })}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}{' '}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
