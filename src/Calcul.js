import React from 'react';
import './Calcul.css';

function Calcul(props) {
    console.log(props)


  return (
    <div class="alert alert-primary" role="alert">
        Calcul : {props.entry}
    </div>
  );
}

export default Calcul;
