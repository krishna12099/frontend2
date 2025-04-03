import React from 'react'
import FpropsCard from './Fpropscard'

function FuncProps() {
  return (
    <div className='row m-2 p-2'>
      <FpropsCard img="facial.jpg" title="Facial" description="Facial type 1" />
      <FpropsCard img="facial1.jpg" title="Facial" description="Facial type 2" />
      <FpropsCard img="facial2.jpg" title="Facial" description="Facial type 3" />
    </div>
  )
}

export default FuncProps