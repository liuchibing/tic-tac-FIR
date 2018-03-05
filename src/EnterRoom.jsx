import { Component } from 'react'
import { Link } from 'react-router-dom'

import Layout from 'antd/es/layout'
import 'antd/es/layout/style/css'
import { Row, Col } from 'antd/es/grid'
import 'antd/es/grid/style/css'
import Input from 'antd/es/input'
import 'antd/es/input/style/css'
import Button from 'antd/es/button'
import 'antd/es/button/style/css'

class EnterRoom extends Component {
  render () {
    return (
      <Layout>
        <Layout.Content>
          <Row type='flex' justify='center'><Col><h1 style={{ marginTop: '1rem' }}>Tic-Tac-FIR</h1></Col></Row>
          <Row type='flex' justify='center'><Col>
            <Input size='large' placeholder='要加入的游戏ID' />
          </Col></Row>
          <Row type='flex' justify='center'><Col>
            <Link to='/3434/choosefirst'><Button type='primary' size='large' shape='circle' icon='arrow-right' style={{ marginTop: '0.7rem' }} /></Link>
          </Col></Row>
        </Layout.Content>
      </Layout>
    )
  }
}

export default EnterRoom
