import React from "react"
import ReactDOM from "react-dom"
import * as log from "loglevel"
import App from "./views/App"
import "./styles/index.css"

import NetNeutrality from "./content/net-neutrality"

log.enableAll()

ReactDOM.render(<App content={NetNeutrality}/>, document.getElementById("root"))
