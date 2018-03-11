import { Component } from 'react'

import Layout from 'antd/es/layout'
import 'antd/es/layout/style/css'
import { Row, Col } from 'antd/es/grid'
import 'antd/es/grid/style/css'

class Game extends Component {
  gameBoard = Array(15).fill(Array(15).fill(null))

  render () {
    return (
      <Layout>
        <Layout.Content>
          <Row type='flex' justify='center'><Col><h1 style={{ marginTop: '1rem' }}>Tic-Tac-FIR</h1></Col></Row>
          <Row type='flex' justify='center'><Col style={{ fontSize: '1.25rem' }}>{this.props.nextPlayer === this.props.myColor ? '请落子' : '请等待对方落子' }</Col></Row>
          <Row type='flex'>
            <Col className='board'>
              { this.gameBoard.map((row, y) => {
                return (
                  <div className='board-row' key={y}>
                    {row.map((value, x) => {
                      return (
                        <div className='square' key={x}>{value}</div>
                      )
                    })}
                  </div>
                )
              })}
            </Col>
          </Row>
        </Layout.Content>
      </Layout>
    )
  }
}

export default Game
