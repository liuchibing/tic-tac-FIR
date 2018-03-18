import { Component } from 'react'

import { connect } from 'react-redux'

import { Prompt } from 'react-router-dom'

import Layout from 'antd/es/layout'
import 'antd/es/layout/style/css'
import { Row, Col } from 'antd/es/grid'
import 'antd/es/grid/style/css'
import message from 'antd/es/message'
import 'antd/es/message/style/css'

import Header from './Header'

import { DROP } from './actions'

class GameComp extends Component {
  render () {
    return (
      <Layout>
        <Layout.Content>
          <Header />
          <Row type='flex' justify='center' style={{ fontSize: '1.25rem' }}>
            <Col style={{ marginRight: '1rem' }}>棋子：{this.props.color}</Col>
            {!this.props.winner ? (
              <Col>轮到：{this.props.next}</Col>
            ) : (
              <Col style={{ color: 'red' }}>获胜：{this.props.winner}</Col>
            )}
          </Row>
          <Row type='flex' justify='center'>
            <Col className='board'>
              {this.props.board.map((row, y) => {
                return (
                  <div className='board-row' key={y}>
                    {row.map((value, x) => {
                      return (
                        <div className='square' key={x} onClick={this.props.next === this.props.color && !this.props.winner ? this.props.createOnDrop(y, x).bind(this) : null}>{value}</div>
                      )
                    })}
                  </div>
                )
              })}
            </Col>
          </Row>
          <Prompt when message='前进和后退会导致游戏的状态错乱。如果想重新开始，请直接刷新。是否仍要离开？' />
        </Layout.Content>
      </Layout>
    )
  }

  componentDidUpdate () {
    if (this.props.error) message.error(this.props.error.message)
    if (this.props.winner && this.props.winner === this.props.color) message.success('获胜！')
    else if (this.props.winner) message.error('失败！')
  }
}

const Game = connect(
  (state) => {
    return {
      error: state.error,
      color: state.color,
      next: state.next,
      board: state.board,
      winner: state.winner
    }
  },
  (dispatch) => {
    return {
      createOnDrop: function (y, x) {
        return function () {
          if (this.props.board[y][x]) {
            message.warning('不可以重复落子')
            return
          }
          dispatch({
            type: DROP,
            color: this.props.next,
            y,
            x
          })
        }
      }
    }
  }
)(GameComp)

export default Game
