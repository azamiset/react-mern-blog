// Libraries
import React from "react";
import { Provider } from "react-redux";

// config
import { Routes, store } from "../config";

// style
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
