import React, { Component } from "react"
import Page from "./Page"

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-11 col-lg-9 col-xl-8">
            <header className="pt-2q pb-1">
              <h3 className="logo my-0" style={{"lineHeight": 1}}>
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
