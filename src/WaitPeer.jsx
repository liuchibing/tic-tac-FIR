import { Component } from 'react'

class WaitPeer extends Component {
  render () {
    return (
      <div>
        <span>Tic-Tac-FIR</span>
        <p style={{ fontSize: '4rem' }}>{this.props.match.room}</p>
      </div>
    )
  }
}

export default WaitPeer
