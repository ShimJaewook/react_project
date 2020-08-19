import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ItemStore from "./store/ItemStore";

import MainImageStore from "./store/MainImageStore"


import "semantic-ui-css/semantic.min.css";


import { Provider } from "mobx-react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserStore from "./store/UserStore";
import StateStore from "./store/StateStore";



ReactDOM.render(
  <Provider
    ItemStore={ItemStore}
    MainImageStore={MainImageStore}
    UserStore={UserStore}
    StateStore = {StateStore}
  >
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
