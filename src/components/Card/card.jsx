import React from 'react';
import Avatar from './avatar';
import Name from './name';

function Card(props){
    return (
        <div className='card'>
            <div className='text'>
                <Name name={props.name} />
                <h3>-{props.text}</h3>
            </div>
            <div className='img'>
                <Avatar img={props.img} />
            </div>
        </div>
    )
}



export default Card;