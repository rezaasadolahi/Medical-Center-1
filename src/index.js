import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
//* CSS index
import './CSS index/index.css'





ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    ,
    document.getElementById('root')
)