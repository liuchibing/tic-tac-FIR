import { Row, Col } from 'antd/es/grid'
import 'antd/es/grid/style/css'
import Divider from 'antd/es/divider'
import 'antd/es/divider/style/css'

function Header (props) {
  return (
    <Row type='flex' justify='center'><Col><h1 style={{ marginTop: '1rem' }}>Tic-Tac-FIR</h1></Col><Divider type='vertical' style={{ height: '2rem', marginTop: '1.25rem' }} /><Col><h1 style={{ marginTop: '1rem' }}>五子棋</h1></Col></Row>
  )
}

export default Header
