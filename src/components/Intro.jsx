import React from 'react'
import { useNavigate } from 'react-router-dom'
import Typed from 'react-typed'
// import { motion } from 'framer-motion'
import '../stylesheets/intro.css'

function Intro() {
  const navigate = useNavigate();
  
  const handleEnter = () => {
    navigate('/World');
  }
  return (
    <div className='introDiv'>
      <div className="imgContainer"></div>
      <article className='textBox'>
        <Typed 
          className='h3'
          strings={['Roger Comrade!',
                    'Welcome to the vastness of never ending space.',
                    'Don\'t let this calmness fool you.',
                    'Save yourself by entering in the portal.',
                    'It will take you places...']}
          backSpeed={20}
          typeSpeed={60}
        />
        <button className="enterPortal" onClick={handleEnter}>
          enter
        </button>
      </article>
    </div>
  )
}

export default Intro