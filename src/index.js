import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { watchFetch, fetchDataReducer, termReducer, categoryReducer, onChangeReducer } from './duck/products';

const sagaMiddleware = createSagaMiddleware();

const allReducers = combineReducers({
    fetchData: fetchDataReducer,
    term: termReducer,
    category: categoryReducer,
    onChange: onChangeReducer
});

export const store = createStore(allReducers,
  //  compose(
        applyMiddleware(sagaMiddleware),
    //    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

sagaMiddleware.run(watchFetch);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root')|| document.createElement('div') // for testing purposes
);



