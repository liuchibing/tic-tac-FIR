import { Component } from 'react'
import { connect } from 'react-redux'

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
import Icon from 'antd/es/icon'
import 'antd/es/icon/style/css'
import message from 'antd/es/message'
import 'antd/es/message/style/css'

import Header from './Header'

import { CHANGE_BOARD_SIZE, GENERATE_MY_RANDOM, GOTO_BOARD } from './actions'

class ChooseFirstComp extends Component {
  render () {
    return (
      <Layout>
        <Layout.Content>
          <Header />
          <Row type='flex' justify='center'><Col>
            <h2>选择棋盘大小：</h2>
          </Col></Row>
          <Row type='flex' justify='center'><Col style={{ width: '80%' }}>
            <Slider min={5} max={19} value={this.props.boardSize} onChange={this.props.onChange} disabled={!this.props.isHost} marks={{
              5: '5',
              10: '10',
              15: '15',
              17: '17',
              19: '19'
            }} />
          </Col></Row>
          <Divider />
          <Row type='flex' justify='center'><Col>
            <h2>选择先行方：</h2>
          </Col></Row>
          <Row type='flex' justify='center'>
            <Col>
              <div style={{ textAlign: 'center', fontSize: '3rem' }}>{this.props.myRandom || <Icon type='loading' style={{ color: '#1890ff' }} />}</div>
              <Button size='large' type='primary' disabled={this.props.color} onClick={this.props.onGenerateMyRandom.bind(this)} style={{ marginRight: '1rem' }}>生成随机数</Button>
            </Col>
            <Col>
              <div style={{ textAlign: 'center', fontSize: '3rem' }}>{this.props.peerRandom || <Icon type='loading' style={{ color: '#1890ff' }} />}</div>
              <Button size='large' type='primary' disabled style={{ marginRight: '1rem' }}>生成随机数</Button>
            </Col>
          </Row>
          {this.props.isHost ? (
            <Row type='flex' justify='center'>
              <Col>
                <Button size='large' shape='circle' type='primary' icon='arrow-right' disabled={!this.props.color} onClick={this.props.onGotoBoard.bind(this)} style={{ marginTop: '1rem' }} />
              </Col>
            </Row>
          ) : null}
        </Layout.Content>
      </Layout>
    )
  }

  componentDidUpdate () {
    if (this.props.error) message.error(this.props.error.message)
  }
}

const ChooseFirst = connect(
  (state) => {
    return {
      error: state.error,
      isHost: state.isHost,
      boardSize: state.boardSize,
      myRandom: state.myRandom,
      peerRandom: state.peerRandom,
      color: state.color
    }
  },
  (dispatch) => {
    return {
      onChange: function (value) {
        dispatch({ type: CHANGE_BOARD_SIZE, boardSize: value })
      },
      onGenerateMyRandom: function () {
        dispatch({ type: GENERATE_MY_RANDOM, history: this.props.history })
      },
      onGotoBoard: function () {
        dispatch({ type: GOTO_BOARD })
      }
    }
  }
)(ChooseFirstComp)

export default ChooseFirst
