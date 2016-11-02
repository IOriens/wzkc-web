import React from 'react'
import Config from 'Config'

import './Upload.scss'

class Upload extends React.Component {
    constructor() {
        super()
        this.state = {
            submited: false,
            text: ''
        }
    }

    componentDidMount() {
        let text = sessionStorage.getItem('txt')
        this.setState({ text: text ? text : '' })
    }

    sendData(data) {
        // console.log(data)

        var xhr = new XMLHttpRequest()
        var fd = new FormData()
        var that = this
        for (let name in data) {
            fd.append(name, data[name])
        }

        xhr.addEventListener('load', function (e) {
            this.setState({ submited: true })
        }.bind(that))

        xhr.addEventListener('error', function (e) {
            throw (e)
        })

        xhr.open('POST', `${Config.serverURL}/Items`)
        xhr.send(fd)
    }

    handleSubmit(e) {
        e.preventDefault()
        let data = { item: this.state.text.trim() }
        this.sendData(data)
    }

    handleChange(e) {
        sessionStorage.setItem('txt', e.target.value)
        this.setState({ submited: false, text: e.target.value })
    }

    handleReset(e) {
        e.preventDefault()
        this.setState({ text: '' })
    }

    render() {
        return (
            <div className="upload">
                <form onSubmit={e => this.handleSubmit(e)}>
                    <textarea placeholder="在这里输入信息哦" onChange={e => this.handleChange(e)} value={this.state.text} />
                    <div className="form-control">
                        <span>{this.state.submited ? "信息上传成功" : "信息未上传"}</span>
                        <button className="submit-btn">提交</button>
                        <button className="submit-btn" onClick={this.handleReset.bind(this)}>重置</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Upload

