import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { App } from './components/App'

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/:scoreboard/:id" element={<App />} />
    </Routes>
  </Router>,
  document.getElementById('root')
)
