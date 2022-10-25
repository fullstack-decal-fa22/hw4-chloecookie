import React from 'react';

/* TODO: Translate the below class component to a functional component! */

const Color = (props) =>  {

    return (
        <div>
            <button onClick={() => handleClick({props.color}}>Post {{props.color}}</button>
        </div>
    );
}


export default Color

