import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style/estilos.css";
import Rotas from "./components/Router";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Rotas />
  </React.StrictMode>
);
