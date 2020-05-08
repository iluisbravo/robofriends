import React from 'react';
import Card from '../components/Card';

const CardList = (props) => {
    const {robots} = props;

    const cardArray = robots.map(user => {
        return <Card 
            key={user.id} 
            id={user.id} 
            name={user.name} 
            email={user.email}             
        />
    });

    return(
        <div>
            <div>
                {cardArray}
            </div>
        </div>
    );
}

export default CardList;
