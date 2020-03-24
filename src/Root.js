import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import ConfigureStore from "./ConfigureStore";

const store = ConfigureStore();

function Root() {
    return (
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
  }
  export default Root;