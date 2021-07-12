import React from 'react'
import { useHistory } from 'react-router-dom'
import './../Goback/goback.css'

function Goback() {
    const history = useHistory()
    return (
        <div onClick={history.goBack} className="goback">
            <span >&lt;&lt;</span>
        </div>
    )
}

export default Goback
