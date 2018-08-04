import axios from "axios"
import React from "react"
import ReactDOM from "react-dom"
import * as log from "loglevel"
import App from "./views/App"
import "./index.css"

log.enableAll()

ReactDOM.render(<App />, document.getElementById("root"))
