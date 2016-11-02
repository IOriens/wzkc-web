import React from 'react'
import Config from 'Config'

import './Item.scss'
class Item extends React.Component {

    handleClick(e) {
        let form = new FormData()
        form.append('id', this.props.item.time)
        // console.log(this.props.item.time)

        let request = {
            method: 'delete',
            body: form
        }

        this.props.handleDeletion(request, this.props.item.time)
    }

    getMessage() {
        let message = this.props.item.message

        //http://blog.mattheworiordan.com/post/13174566389/url-regular-expression-for-links-with-or-without  
        const urlReg = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/g

        function convert(match) {
            let temp = `<a href="${match}" target="_blank">${match}</a>`
            return temp
        }

        // if(urlReg.test(message)) {
        //     return (<a href={message} target="_blank">{message}</a>)
        // } else {
        //     return message
        // }   

        return <h2 dangerouslySetInnerHTML={{ __html: message.replace(urlReg, convert) }}></h2>
    }

    render() {
        var time = new Date(parseInt(this.props.item.time))
        var message = this.props.item.message

        return (
            <li className="content">
                {this.getMessage()}
                <span className="content-time">{time.toLocaleString()}</span>
                <span className="delete-btn" onClick={this.handleClick.bind(this)} >删除</span>
            </li>
        )
    }
}

export default Item
