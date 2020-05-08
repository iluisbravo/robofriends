import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY : 'scroll', border: '3px solid black', height: '600px', margin: '30px', paddingTop: '20px', paddingBottom: '20px' }}>
            {props.children}
        </div>
    );
}

export default Scroll;