import { Component } from 'react'

import 'antd/dist/antd.css'
import { Layout, Row, Col } from 'antd'

class Landing extends Component {
  gameBoard = [
    [ 'X', 'O', 'X' ],
    [ 'X', 'O', 'X' ],
    [ 'X', 'O', 'X' ]
  ]

  render () {
    return (
      <Layout>
        <Layout.Content>
          <Row type='flex' justify='center'><Col><h1 style={{ marginTop: '1rem' }}>Tic-Tac-FIR</h1></Col></Row>
          <Row type='flex' justify='center'><Col>{this.props.nextPlayer === this.props.myColor ? '请落子' : '请等待对方落子' }</Col></Row>
          <Row type='flex'>
            <Col>
              <table>
                <tbody>
                  { this.gameBoard.map((row, y) => {
                    return (
                      <tr key={y}>
                        {row.map((value, x) => {
                          return (
                            <td key={x}>{value}</td>
                          )
                        })}
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </Col>
          </Row>
        </Layout.Content>
      </Layout>
    )
  }
}

export default Landing
