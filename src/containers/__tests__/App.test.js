import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"
import configureStore from "../../configureStore"
import App from "../App"

it("renders without crashing", () => {
  const div = document.createElement("div")
  const store = configureStore()
  ReactDOM.render(
    <MemoryRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>,
    div,
  )
  ReactDOM.unmountComponentAtNode(div)
})
