import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import {TodosConetxtProvider} from './store/todos-context';

const container: HTMLElement | any = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <TodosConetxtProvider>
      <App />
    </TodosConetxtProvider>
  </React.StrictMode>,
);
