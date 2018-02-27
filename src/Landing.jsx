import { Component } from 'react'
import { Link } from 'react-router-dom'

import 'antd/dist/antd.css'
import { Button } from 'antd'

class Landing extends Component {
  render () {
    return (
      <div>
        <h1>Tic-Tac-FIR</h1>
        <Button type='primary' size='large'>创建游戏</Button>
        <Button type='primary' size='large'>加入游戏</Button>
        <Link to='/3245/wait'>go</Link>
      </div>
    )
  }
}

export default Landing
