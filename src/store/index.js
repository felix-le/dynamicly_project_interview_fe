import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reduxState/reducer/index';

const middlewares = [thunk];
const store = createStore(
  rootReducer,
  middlewares,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
