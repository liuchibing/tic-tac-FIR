import { Component } from 'react'
// import { Link } from 'react-router-dom'

import 'antd/dist/antd.css'
import { Layout, Row, Col, Button } from 'antd'

class Landing extends Component {
  render () {
    return (
      <Layout>
        <Layout.Content>
          <Row type='flex' justify='center'><Col><h1 style={{ marginTop: '1rem' }}>Tic-Tac-FIR</h1></Col></Row>
          <Row type='flex' justify='center'><Col><Button type='primary' size='large' style={{ margin: '1rem' }}>创建游戏</Button></Col></Row>
          <Row type='flex' justify='center'><Col><Button type='primary' size='large' style={{ margin: '1rem' }}>加入游戏</Button></Col></Row>
        </Layout.Content>
      </Layout>
    )
  }
}

export default Landing
