import './main.css'

import React from 'react';
import ReactDOM from 'react-dom'
import {applyMiddleware, createStore} from 'redux'
import {createBrowserHistory} from 'history'
import thunk from 'redux-thunk'
/*import {composeWith} from 'ramda'*/
import {routerMiddleware, ConnectedRouter} from 'connected-react-router'
import {composeWithDevTools} from 'redux-devtools-extension'
import {Provider} from 'react-redux'


import createRootReducer from 'reducers';
import Layout from 'containers/layout'

const history = createBrowserHistory()
const middlewares = [thunk, routerMiddleware(history)]

const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(...middlewares))
)

ReactDOM.render(
  <Provider store={store}>
      <ConnectedRouter history={history} >
          <Layout>

          </Layout>
      </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)