const snippet = `import { connectRoutes } from 'redux-first-router'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import userIdReducer from './reducers/userIdReducer'

const routesMap = {
  HOME: '/home',      // action <-> url path
  USER: '/user/:id',  // :id is a dynamic segment
}

const { reducer, middleware, enhancer } = connectRoutes(routesMap)

const rootReducer = combineReducers({ router: reducer, userId: userIdReducer })
const middlewares = applyMiddleware(middleware)
const store = createStore(rootReducer, compose(enhancer, middlewares))
`;

export default snippet;
