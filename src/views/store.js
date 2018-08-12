import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import productReducer from './reducers/product-reducer';

export default () => createStore(
  combineReducers({
    productReducer
  }),
  applyMiddleware(thunk)
);
