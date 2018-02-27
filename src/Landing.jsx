import { Component } from 'react'
import { Button } from 'antd'

class Landing extends Component {
  render () {
    return (
      <div className='App'>
        <h1>Tic-Tac-FIR</h1>
        <Button size='large'>创建游戏</Button>
      </div>
    )
  }
}

export default Landing
