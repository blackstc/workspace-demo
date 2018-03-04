import React from 'react'
import ReactDom from 'react-dom'

import mult from 'workspace-b'

class App extends React.Component {
  render() {
    return <div>{mult(2)}</div>
  }
}

ReactDom.render(<App />, document.getElementById('root'))
