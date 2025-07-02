import React from 'react'
import Card from './card'
import img1 from './Images/girl1.jpeg'
import img2 from './Images/girl2.jpeg'
import img3 from './Images/girl3.jpeg'
import img4 from './Images/girl4.jpeg'
import img5 from './Images/girl5.jpeg'
import img6 from './Images/girl6.jpeg'



function Main() {
  return (
    <>
       <h1 className='heading'>Card Gallery</h1>  
       <div className='cardStyle'>
       <Card title="1" img={img1}/>
       <Card title="2" img={img2}/>
       <Card title="3" img={img3}/>
       <Card title="4" img={img4}/>
       <Card title="5" img={img5}/>
       <Card title="6" img={img6}/>
      </div>
    </>
  )
}

export default Main