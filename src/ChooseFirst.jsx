import { Component } from 'react'

import { Link } from 'react-router-dom'

import Layout from 'antd/es/layout'
import 'antd/es/layout/style/css'
import { Row, Col } from 'antd/es/grid'
import 'antd/es/grid/style/css'
import Button from 'antd/es/button'
import 'antd/es/button/style/css'
import Slider from 'antd/es/slider'
import 'antd/es/slider/style/css'
import Divider from 'antd/es/divider'
import 'antd/es/divider/style/css'

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
          <Row type='flex' justify='center'><Col>
            <h2>选择先行方：</h2>
          </Col></Row>
          <Row type='flex' justify='center'>
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
