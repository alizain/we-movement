import axios from "axios"
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router } from "react-router-dom"
import * as log from "loglevel"
import { isInDevelopment } from "./checkEnvironment"
import configureStore from "./configureStore"
import App from "./containers/App"
import "./index.css"
import history from "./history"

log.setDefaultLevel("warn")
if (isInDevelopment()) {
  log.enableAll()
}

function initReactApp(passdownState = {}) {
  const store = configureStore(passdownState)
  ReactDOM.render(
    <Router history={history}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>,
    document.getElementById("root"),
  )
}

initReactApp()
