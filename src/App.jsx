import { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'

import Landing from './Landing'
import WaitPeer from './WaitPeer'
import EnterRoom from './EnterRoom'
import ChooseFirst from './ChooseFirst'
import Game from './Game'

class App extends Component {
  render () {
    return (
      <div>
        <Switch>
          <Route exact path='/wait' component={WaitPeer} />
          <Route exact path='/choosefirst' component={ChooseFirst} />
          <Route exact path='/game' component={Game} />
          <Route exact path='/enter' component={EnterRoom} />
          <Route exact path='/' component={Landing} />
        </Switch>
        <div>
          Copyright © 2018 Liu Chibing. All rights reserved.
        </div>
      </div>
    )
  }
}

export default App
