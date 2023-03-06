import React from 'react'
const bannerbg = '/img/banner-bg.png';
export default function Banner() {
    return (
        <div className='banner-wrapper'>
            <img src={bannerbg}></img>
            <div className='container'>
                <div className='content'>
                    <p>List your band or Allow your food trucks to take part in food fest</p>
                    <span href='/'>Click to Register</span>
                </div>
            </div>
        </div>
    )
}
