import { Component } from 'react'
import { connect } from 'react-redux'

import Layout from 'antd/es/layout'
import 'antd/es/layout/style/css'
import { Row, Col } from 'antd/es/grid'
import 'antd/es/grid/style/css'
import Input from 'antd/es/input'
import 'antd/es/input/style/css'
import Button from 'antd/es/button'
import 'antd/es/button/style/css'
import message from 'antd/es/message'
import 'antd/es/message/style/css'

import { ENTER_GAME } from './actions'

class EnterRoomComp extends Component {
  render () {
    return (
      <Layout>
        <Layout.Content>
          <Row type='flex' justify='center'><Col><h1 style={{ marginTop: '1rem' }}>Tic-Tac-FIR</h1></Col></Row>
          <Row type='flex' justify='center'><Col>
            <Input size='large' placeholder='要加入的游戏ID' ref={(node) => { this.input = node }} />
          </Col></Row>
          <Row type='flex' justify='center'><Col>
            <Button type='primary' size='large' shape='circle' icon='arrow-right' loading={this.props.loading} style={{ marginTop: '0.7rem' }} onClick={this.props.onSubmit.bind(this)} />
          </Col></Row>
        </Layout.Content>
      </Layout>
    )
  }

  componentDidUpdate () {
    if (this.props.error) message.error(this.props.error.message)
  }
}

const EnterRoom = connect(
  (state) => {
    return {
      loading: state.loading,
      error: state.error
    }
  },
  (dispatch) => {
    return {
      onSubmit: function (e) {
        dispatch({
          type: ENTER_GAME,
          id: this.input.input.value,
          history: this.props.history
        })
      }
    }
  }
)(EnterRoomComp)

export default EnterRoom
