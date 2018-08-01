import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" />
        </Switch>
      </main>
    )
  }
}

export default App
