import React from 'react';
import Card from './card';
import pearsons from '../pearsons';


function createCard(pearson){
    return <Card key={pearson.id} name={pearson.name} text={pearson.text} img={pearson.img} />
}


function App(){
    return( 
    <div>

        {pearsons.map(createCard)}


        {/* <Card name={pearsons[0].name} text={pearsons[0].text} img={pearsons[0].img} />
        <Card name={pearsons[1].name} text={pearsons[1].text} img={pearsons[1].img} />
        <Card name={pearsons[2].name} text={pearsons[2].text} img={pearsons[2].img} /> */}
    </div>
    )
}
export default App;