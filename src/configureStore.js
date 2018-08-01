import { createStore, applyMiddleware } from "redux"
import { createLogger } from "redux-logger"
import thunk from "redux-thunk"
import { isInDevelopment } from "./checkEnvironment"
import rootReducer from "./reducers"

const middleware = [thunk]

if (isInDevelopment()) {
  middleware.push(createLogger())
}

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleware),
  )
}
