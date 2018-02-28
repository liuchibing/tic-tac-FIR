import { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'

import Landing from './Landing'
import WaitPeer from './WaitPeer'
import EnterRoom from './EnterRoom'

export default class App extends Component {
  render () {
    return (
      <Switch>
        <Route exact path='/:room/wait' component={WaitPeer} />
        <Route exact path='/enter' component={EnterRoom} />
        <Route exact path='/' component={Landing} />
      </Switch>
    )
  }
}
