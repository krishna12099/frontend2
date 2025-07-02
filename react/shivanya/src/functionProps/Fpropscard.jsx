import React from 'react'


function FpropsCard({ img, title, description }) {
    return (
        <div className='col-md-4 mt-2'>
             

            <div className='card p-3' style={{ width: '100%' }}>
                <img className='card-img-top' src={img} alt='card-image' style={{ width: '100%', height: '250px' }} />
                <div className='card-body'>
                    <h4 className='card-title'>{title}</h4>
                    <p className='card-text'>{description}</p>
                    <a href className='btn btn-primary'>view product</a>
                </div>
            </div>

            <div className='card p-3' style={{ width: '100%' }}>
                <img className='card-img-top' src={img} alt='card-image' style={{ width: '100%', height: '250px' }} />
                <div className='card-body'>
                    <h4 className='card-title'>{title}</h4>
                    <p className='card-text'>{description}</p>
                    <a href className='btn btn-primary'>view product</a>
                </div>
            </div>

            <div className='card p-3' style={{ width: '100%' }}>
                <img className='card-img-top' src={img} alt='card-image' style={{ width: '100%', height: '250px' }} />
                <div className='card-body'>
                    <h4 className='card-title'>{title}</h4>
                    <p className='card-text'>{description}</p>
                    <a href className='btn btn-primary'>view product</a>
                </div>
            </div>
        </div>
    )
}

export default FpropsCard