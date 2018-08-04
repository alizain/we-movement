import React, { Component } from "react"
import Page from "./Page"

class App extends Component {
  render() {
    return (
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-11 col-lg-9 col-xl-8">
            <header>
              <h3 class="logo">
                <a href="/">
                  <strong>
                    <em>we</em>
                  </strong>
                </a>
              </h3>
            </header>
            <main>
              <Page {...this.props.content} />
            </main>
          </div>
        </div>
      </div>
    )
  }
}

export default App
