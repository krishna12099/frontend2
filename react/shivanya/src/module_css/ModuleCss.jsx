import React from 'react'

import A from './mystyle1.module.css';
import B from './mystyle2.module.css';


function ModuleCss() {
  return (
    <div>

        <h1>ModuleCss</h1>

        <hr></hr>

        <div className= {A.bigblue} >
             Hii this is my style 1
        </div>

        <div className= {B.bigblue} >
             Hii this is my style 2
        </div>

    </div>
  )
}

export default ModuleCss