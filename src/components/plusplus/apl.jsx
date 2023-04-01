import React from 'react';

function Plus(){
    const [count, next] = React.useState(0);

    function plusplus(){
        next(count + 1);
    }
    function plusminus(){
        next(count - 1);
    }

    return(
        <div className='container1'>
            <h1>{count}</h1>
            <button onClick={plusplus}>+</button>
            <button onClick={plusminus}>-</button>
        </div>
    );
}

export default Plus;