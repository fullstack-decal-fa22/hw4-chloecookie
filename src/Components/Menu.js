import React {useState} from 'react';
import Color from './Color';
/* Add any imports you think you might need here! */

const [color, setColor] = useState('');

const handleClick = () => {
  setColor
}
const Menu = (props) => { 

    return (
      <div className="colorOptions">
          <button 
            style={{ 
              backgroundColor: setColor ? 'red' : ''
            }}
              onClick={handleClick}
              >Post red</button>
          <button> Post pink</button>
            style={{
              backgroundColor: setColor ? 'blue': ''
            }}
              onClick={{handleClick}}
          <button> Post blue</button>
            style={{
              backgroundColor: setColor ? 'blue' : ''
            }}
              onClick = {handleClick}
          <button> Post green</button>
              style={{
                backgroundColor: setColor ? 'green' : ''
              }}
              onClick={{handleClick}} 
      </div>
    );
}

export default Menu;