import React from 'react'
import PropTypes from 'prop-types'
import useVanta from './../../hooks/useVanta'
import './../WelcomScreen/welcomScreen.css'

const WelcomeScreen = ({ children }) => {
    const myRefDiv = useVanta()

    return (
        <div className="full" ref={myRefDiv}>
            {children}

        </div>
    )
}

WelcomeScreen.propTypes = {
    children: PropTypes.node,
}

export default WelcomeScreen