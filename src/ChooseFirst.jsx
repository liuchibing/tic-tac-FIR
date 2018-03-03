import { Component } from 'react'

import { Link } from 'react-router-dom'

import 'antd/dist/antd.css'
import { Layout, Row, Col, Button, Slider, Divider } from 'antd'

class ChooseFirst extends Component {
  render () {
    return (
      <Layout>
        <Layout.Content>
          <Row type='flex' justify='center'><Col><h1 style={{ marginTop: '1rem' }}>Tic-Tac-FIR</h1></Col></Row>
          {!this.props.isHost
            ? <div>
              <Row type='flex' justify='center'><Col>
                <h2>选择棋盘大小：</h2>
              </Col></Row>
              <Row type='flex' justify='center'><Col style={{ width: '80%' }}>
                <Slider min={5} max={19} defaultValue={15} marks={{
                  5: '5',
                  10: '10',
                  15: '15',
                  17: '17',
                  19: '19'
                }} />
              </Col></Row>
              <Divider />
            </div>
            : null}
          <Row type='flex' justify='center'>
            <Row type='flex' justify='center'><Col>
              <h2>选择先行方：</h2>
            </Col></Row>
            <Col>
              <div style={{ textAlign: 'center', fontSize: '3rem' }}>{this.props.myRandom || 5}</div>
              <Button size='large' type='primary' style={{ marginRight: '1rem' }}>生成随机数</Button>
            </Col>
            <Col>
              <div style={{ textAlign: 'center', fontSize: '3rem' }}>{this.props.peerRandom || 8}</div>
              <Button size='large' type='primary' loading disabled style={{ marginRight: '1rem' }}>生成随机数</Button>
            </Col>
          </Row>
          <Row type='flex' justify='center'>
            <Col>
              <Link to='/8374/game'><Button size='large' shape='circle' type='primary' icon='arrow-right' style={{ marginTop: '1rem' }} /></Link>
            </Col>
          </Row>
        </Layout.Content>
      </Layout>
    )
  }
}

export default ChooseFirst
