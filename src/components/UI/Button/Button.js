import React from 'react';
import './Buttons.scss';

const Button = (props) => {
  return (
  	<button className={["Button", props.btnType].join(' ')} onClick={props.clicked}>{props.children}</button>
  );
};

export default Button;