import { Component } from 'react'
import { connect } from 'react-redux'

import Layout from 'antd/es/layout'
import 'antd/es/layout/style/css'
import { Row, Col } from 'antd/es/grid'
import 'antd/es/grid/style/css'

class WaitPeerComp extends Component {
  render () {
    return (
      <Layout>
        <Layout.Content>
          <Row type='flex' justify='center'><Col><h1 style={{ marginTop: '1rem' }}>Tic-Tac-FIR</h1></Col></Row>
          <Row type='flex' justify='center'><Col>
            <p style={{ textAlign: 'center' }}>你的游戏ID：</p>
            <p style={{ textAlign: 'center', fontSize: '3rem' }}>{this.props.gameId}</p>
            <p style={{ textAlign: 'center' }}>将这个ID发给朋友即可加入游戏。朋友加入后页面将会自动跳转。</p>
          </Col></Row>
        </Layout.Content>
      </Layout>
    )
  }
}

const WaitPeer = connect(
  (state) => {
    return {
      gameId: state.gameId
    }
  }
)(WaitPeerComp)

export default WaitPeer
