import { Component } from 'react'

import 'antd/dist/antd.css'
import { Layout, Row, Col } from 'antd'

class WaitPeer extends Component {
  render () {
    return (
      <Layout>
        <Layout.Content>
          <Row type='flex' justify='center'><Col><h1 style={{ marginTop: '1rem' }}>Tic-Tac-FIR</h1></Col></Row>
          <Row type='flex' justify='center'><Col>
            <p style={{ textAlign: 'center' }}>你的游戏ID：</p>
            <p style={{ textAlign: 'center', fontSize: '3rem' }}>{this.props.match.params.room}</p>
            <p style={{ textAlign: 'center' }}>将这个ID发给朋友即可加入游戏。朋友加入后页面将会自动跳转。</p>
          </Col></Row>
        </Layout.Content>
      </Layout>
    )
  }
}

export default WaitPeer
