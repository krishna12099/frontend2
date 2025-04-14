import React from 'react'

import './mySass.scss';

function SassCss() {
    return (
        <div>

            <div className='Sassbox'>
                Hello SASS CSS
            </div>
            <hr />

            <nav>
                <ul>
                    <li>
                        <a href>Home</a>
                    </li>
                    <li>
                        <a href>About</a>
                    </li>
                    <li>
                        <a href>Blog</a>
                    </li>
                    <li>
                        <a href>Contact</a>
                    </li>
                </ul>
            </nav>
            <hr />

            <h2>Hello I am instead SASS CSS</h2>
            <hr />

            <button className='buuttonBasic'>Basic</button>
            <button className='red'>red</button>
            <button className='blue'>blue</button>
            <button className='yellow'>yellow</button>
            <button className='orange'>orange</button>



        </div>
    )
}

export default SassCss