import { Component } from 'react'

import 'antd/dist/antd.css'
import { Layout, Row, Col, Button } from 'antd'

class ChooseFirst extends Component {
  render () {
    return (
      <Layout>
        <Layout.Content>
          <Row type='flex' justify='center'><Col><h1 style={{ marginTop: '1rem' }}>Tic-Tac-FIR</h1></Col></Row>
          <Row type='flex' justify='center'>
            <Col>
              <div style={{ textAlign: 'center', fontSize: '3rem' }}>{this.props.myRandom || 5}</div>
              <Button size='large' type='primary' style={{ marginRight: '1rem' }}>生成随机数</Button>
            </Col>
            <Col>
              <div style={{ textAlign: 'center', fontSize: '3rem' }}>{this.props.peerRandom || 8}</div>
              <Button size='large' type='primary' disabled style={{ marginRight: '1rem' }}>生成随机数</Button>
            </Col>
          </Row>
        </Layout.Content>
      </Layout>
    )
  }
}

export default ChooseFirst
