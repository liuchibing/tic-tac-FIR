import { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Layout from 'antd/es/layout'
import 'antd/es/layout/style/css'
import { Row, Col } from 'antd/es/grid'
import 'antd/es/grid/style/css'
import Button from 'antd/es/button'
import 'antd/es/button/style/css'
import Spin from 'antd/es/spin'
import 'antd/es/spin/style/css'
import message from 'antd/es/message'
import 'antd/es/message/style/css'

import { INIT, CREATE_GAME } from './actions'

class LandingComp extends Component {
  render () {
    return (
      <Spin spinning={!this.props.connected}>
        <Layout>
          <Layout.Content>
            <Row type='flex' justify='center'><Col><h1 style={{ marginTop: '1rem' }}>Tic-Tac-FIR</h1></Col></Row>
            <Row type='flex' justify='center'><Col><Button type='primary' size='large' style={{ margin: '1rem' }} onClick={this.props.handleCreateGame.bind(this)} loading={this.props.loading}>创建游戏</Button></Col></Row>
            <Row type='flex' justify='center'><Col><Link to='/enter'><Button type='primary' size='large' style={{ margin: '1rem' }}>加入游戏</Button></Link></Col></Row>
          </Layout.Content>
        </Layout>
      </Spin>
    )
  }

  componentDidMount () {
    if (!this.props.connected) {
      this.props.dispatch({ type: INIT })
    }
  }

  componentDidUpdate () {
    if (this.props.error) message.error(this.props.error.message)
  }
}

const Landing = connect(
  (state) => {
    return {
      connected: state.connected,
      loading: state.loading,
      error: state.error
    }
  },
  (dispatch) => {
    return {
      dispatch: dispatch,
      handleCreateGame: function (e) {
        dispatch({ type: CREATE_GAME, history: this.props.history })
      }
    }
  }
)(LandingComp)

export default Landing
