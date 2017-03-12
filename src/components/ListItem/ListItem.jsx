import React from 'react'
import Item from '../Item/Item'
import Config from 'Config'

class ListItem extends React.Component {
  constructor () {
    super()
    this.state = {
      messages: []
    }
  }

  removeItem (item) {
    let messages = this.state.messages
    for (const i in messages) {
      if (messages[i].time === item) {
        messages.splice(i, 1)
        return messages
      }
    }
    return messages
  }

  handleDeletion (request, time) {
    fetch(`${Config.serverURL}/Items`, request)
        .then((res) => {
          let messages = this.removeItem(time)
          this.setState({messages: messages})
        })
  }

  componentDidMount () {
    var url = `${Config.serverURL}/Items`
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = (error) => {
      if (xhr.readyState == 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || (xhr.status == 304)) {
          this.setState({
            messages: JSON.parse(xhr.responseText).reverse()
          })
        } else {
          throw (error)
        }
      }
    }
    xhr.open('get', url, true)
    xhr.send(null)
  }

  render () {
    return (
      <div>
        <ul className='messages'>{this.state.messages.map((item) => {
          return <Item key={item.time} item={item} handleDeletion={this.handleDeletion.bind(this)} />
        })}</ul>
      </div>
    )
  }
}

export default ListItem
