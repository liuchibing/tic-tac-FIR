import { Component } from 'react'

import 'antd/dist/antd.css'
import { Layout, Row, Col } from 'antd'

class EnterRoom extends Component {
  render () {
    return (
      <Layout>
        <Layout.Content>
          <Row type='flex' justify='center'><Col><h1 style={{ marginTop: '1rem' }}>Tic-Tac-FIR</h1></Col></Row>
          <Row type='flex' justify='center'><Col>
            <p>Hello</p>
          </Col></Row>
        </Layout.Content>
      </Layout>
    )
  }
}

export default EnterRoom
