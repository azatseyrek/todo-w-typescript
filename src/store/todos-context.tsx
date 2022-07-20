import {createContext, useState} from 'react';
import Todo from '../models/todo';

const initialContext = {
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
};

export const TodosContext = createContext<{
  items: Todo[];
  addTodo: (todoText: string) => void;
  removeTodo: (id: string) => void;
}>(initialContext);

export const TodosConetxtProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    setTodos((prevTodos) => {
      const newTodo = new Todo(todoText);
      return [...prevTodos, newTodo]; //prevTodos.concat(newTodo)
    });
  };

  const removeTodoHandler = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const contextValue = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};
