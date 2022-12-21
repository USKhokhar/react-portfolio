import React from 'react'
import Typed from 'react-typed'
import '../stylesheets/intro.css'

const handleEnter = () => {
  console.log(1);
}

function Intro() {
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
          backSpeed={30}
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