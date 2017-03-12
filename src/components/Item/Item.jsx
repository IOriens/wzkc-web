import React from 'react'
import Config from 'Config'

import './Item.scss'
class Item extends React.Component {

  handleClick (e) {
    let form = new FormData()
    form.append('id', this.props.item.time)
        // console.log(this.props.item.time)

    let request = {
      method: 'delete',
      body: form
    }

    this.props.handleDeletion(request, this.props.item.time)
  }

  getMessage () {
    let message = this.props.item.message

        // http://www.cnblogs.com/554006164/archive/2009/06/16/1504160.html
    var strRegex = '^((https|http|ftp|rtsp|mms)?://)'
            + "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" // ftp的user@
            + '(([0-9]{1,3}\.){3}[0-9]{1,3}' // IP形式的URL- 199.194.52.184
            + '|' // 允许IP和DOMAIN（域名）
            + "([0-9a-z_!~*'()-]+\.)*" // 域名- www.
            + '([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.' // 二级域名
            + '[a-z]{2,6})' // first level domain- .com or .museum
            + '(:[0-9]{1,4})?' // 端口- :80
            + '((/?)|' // a slash isn't required if there is no file name
            + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$"
    const urlReg = new RegExp(strRegex, 'g')

    function convert (match) {
            // Check if the url begin with http
      const protocolReg = /^https?/i
      if (!match.match(protocolReg)) {
        match = 'http://' + match
      }

      let temp = `<a href="${match}" target="_blank">${match}</a>`
      return temp
    }

    return <h2 dangerouslySetInnerHTML={{ __html: message.replace(urlReg, convert) }} />
  }

  render () {
    var time = new Date(parseInt(this.props.item.time))
    var message = this.props.item.message

    return (
      <li className='content'>
        {this.getMessage()}
        <span className='content-time'>{time.toLocaleString()}</span>
        <span className='delete-btn' onClick={this.handleClick.bind(this)} >删除</span>
      </li>
    )
  }
}

export default Item
