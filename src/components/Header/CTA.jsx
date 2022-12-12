import React from 'react'
import AbhishekResume from '../../assets/AbhishekResume.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={AbhishekResume} download className='btn'>Download CV</a>
        <a href="#contact"className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA  