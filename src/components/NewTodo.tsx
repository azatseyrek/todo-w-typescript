import React, {useContext, useRef} from 'react';
import {TodosContext} from '../store/todos-context';
import classes from './NewTodo.module.css';

const NewTodo = () => {
  const todosCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }
    todosCtx.addTodo(enteredText);
    formRef.current!.reset();
  };

  return (
    <form ref={formRef} onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text"> Todo Text</label>
      <input ref={todoTextInputRef} type="text" id="text" />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
