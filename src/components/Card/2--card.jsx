import React from 'react';
import Avatar from './1--avatar';
import Name from './1--name';
import Text from './1--text';


function Card(props){
    return (
        <div className='card'>
            <div className='text'>
                <Name name={props.name} />
                <Text text={props.text} />
            </div>
            <div className='img'>
                <Avatar img={props.img} />
            </div>
        </div>
    )
}



export default Card;