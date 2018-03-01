import { Component } from 'react'

import 'antd/dist/antd.css'
import { Layout, Row, Col, Input, Button } from 'antd'

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
            <Button type='primary' size='large' shape='circle' icon='arrow-right' style={{ marginTop: '0.7rem' }} />
          </Col></Row>
        </Layout.Content>
      </Layout>
    )
  }
}

export default EnterRoom