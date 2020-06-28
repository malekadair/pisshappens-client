import React from 'react'

const Scroll = (props) => {
    return (
      <div style={{ overflow: 'scroll', height: '20%'}}>
        {props.children}
      </div>
    );
  };
  
  export default Scroll;