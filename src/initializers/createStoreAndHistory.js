import { createStore, combineReducers, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import enabledReducers from 'reducers/All'
import enabledSagas from 'sagas/All'


// Initialize browser history and middlewares
const history = createHistory()
const appRouterMiddleware = routerMiddleware(history)
const appSagaMiddleware = createSagaMiddleware()

// Build up store with reducers and middlewares
const store = createStore(
  combineReducers({
    ...enabledReducers,
    router: routerReducer
  }),
  applyMiddleware(appRouterMiddleware),
  applyMiddleware(appSagaMiddleware)
)

window.store = store

appSagaMiddleware.run(enabledSagas)

export default function() {
  return {
    store,
    history
  }
}
