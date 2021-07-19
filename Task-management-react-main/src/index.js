import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { userReducer, errorReducer, toDosReducer } from './store/reducers';
import ReactDOM from 'react-dom';
import App from './componnents/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { getAllUsers } from './store/action/user';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers({ user: userReducer, error: errorReducer, toDos: toDosReducer }), composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')

);
store.dispatch(getAllUsers());
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
