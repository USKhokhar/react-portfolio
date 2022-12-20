import React from 'react'
import Space from './Space'

const headStyle ={
    color: '#ff1',
    zIndex: 2,
    position: 'absolute',
}

function IntroPage() {
  return (
    <div>
        <Space />
        <h1 style={headStyle}>HELLO WORLD</h1>
    </div>
  )
}

export default IntroPage