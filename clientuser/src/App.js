import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Container from "./components/container";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Container />
      </div>
    </Provider>
  );
}

export default App;
