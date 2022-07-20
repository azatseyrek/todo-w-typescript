import React, {useContext} from 'react';
import {TodosContext} from '../store/todos-context';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

// componentimize React.FC gibi generic bir deger verdik. yanda actigimiz generic tab isareti (<>) icerisiende propsumuzun type tanimlamasini yaptik. Normalde type defination yapip propsumuzu bu type definationa atardik chdildren kullanacaksak ta reactNode olarak childrenin typeini giriyorduk.

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          onRemoveTodo={todosCtx.removeTodo}
          key={item.id}
          text={item.text}
          id={item.id}
        />
      ))}
    </ul>
  );
};

export default Todos;
