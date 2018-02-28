import { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'

import Landing from './Landing'
import WaitPeer from './WaitPeer'

export default class App extends Component {
  render () {
    return (
      <Switch>
        <Route path='/:room' component={WaitPeer} />
        <Route path='/' component={Landing} />
      </Switch>
    )
  }
}
