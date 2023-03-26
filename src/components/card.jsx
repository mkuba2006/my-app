import React from 'react';
import Avatar from './avatar';
function Card(props){
    return (
        <div className='card'>
            <div className='text'>
                <h2><b>{props.name}</b></h2>
                <h3>-{props.text}</h3>
            </div>
            <div className='img'>
                <Avatar img={props.img} />
            </div>
        </div>
    )
}



export default Card;