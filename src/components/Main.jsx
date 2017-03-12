import React from 'react'
import Header from './Header/Header'
import ListItem from './ListItem/ListItem'
import Upload from './Upload/Upload'

require('./Main.scss')

class Main extends React.Component {
  componentWillMount () {
    let lnk = document.createElement('link')
    lnk.rel = 'short icon'
    lnk.href = require('../img/favicon.ico')
    document.getElementsByTagName('head')[0].appendChild(lnk)
  }

  render () {
    return (
      <div>
        <Header />
        <Upload />
        <ListItem />
      </div>
    )
  }
}

export default Main
