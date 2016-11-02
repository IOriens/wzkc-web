import React, { Component } from 'react'
import { render } from 'react-dom'
import attachFastClick from 'fastclick'

// import components
import Main from './components/Main'


attachFastClick.attach(document.body)


let $$ = (id) => {
    return document.getElementById(id)
}

render(<Main />, $$('main'))
