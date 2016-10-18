import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import { hashHistory } from 'react-router'
import makeRoutes from './views/routes'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './index.css'

const routes = makeRoutes()

ReactDOM.render(
  <App
    history={hashHistory}
    routes={routes}
    />,
  document.getElementById('root')
)
