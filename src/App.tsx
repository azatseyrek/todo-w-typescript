import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import './App.css';

function App() {
  // Adding all of this codes to contextApi
  // // const todos = [new Todo('learn react'), new Todo('learn jest')];
  // const [todos, setTodos] = useState<Todo[]>([]);

  // const addTodoHandler = (todoText: string) => {
  //   setTodos((prevTodos) => {
  //     const newTodo = new Todo(todoText);
  //     return [...prevTodos, newTodo]; //prevTodos.concat(newTodo)
  //   });
  // };

  // const removeTodoHandler = (id: string) => {
  //   const newTodos = todos.filter((todo) => todo.id !== id);
  //   setTodos(newTodos);
  // };
  return (
    <div>
      <NewTodo />
      <Todos />
    </div>
  );
}

export default App;
