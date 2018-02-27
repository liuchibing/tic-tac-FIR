import { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'

import Landing from './Landing'

export default class App extends Component {
  render () {
    return (
      <div className='App'>
        <Switch>
          <Route path='/' component={Landing} />
        </Switch>
      </div>
    )
  }
}
