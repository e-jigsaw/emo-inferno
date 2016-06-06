import 'babel-polyfill'
import 'isomorphic-fetch'
import 'es6-promise'
import {render} from 'inferno-dom'
import createElement from 'inferno-create-element'
import {applyMiddleware, createStore, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import App from './src/components/App.js'
import Provider from './src/components/Provider.js'
import reducers from './src/store.js'

const store = applyMiddleware(thunkMiddleware)(createStore)(reducers)

render(createElement(Provider, {store}, App), document.getElementById('app'))
