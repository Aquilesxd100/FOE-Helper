import React from 'react';
import ReactDOM from 'react-dom/client';
import { Corpo } from "./style"
import Header from './components/Header';
import "./style/estilos.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Corpo>
      <Header />
    </Corpo>
  </React.StrictMode>
);
