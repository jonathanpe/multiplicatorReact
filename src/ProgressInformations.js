import React from 'react';
import './ProgressInformations.css';

function ProgressInformations(props) {

    
    const muiltiplicatorsRemaining = props.questions.length - props.stage

    const status = muiltiplicatorsRemaining? 'progress' : 'end'


  return (
    <div class="alert alert-primary" role="alert">
        <p>Nombre restant de multiplication a deviner : {muiltiplicatorsRemaining}</p>
        <p> Score : {props.score} </p>
        <p>Status : {status} </p>
        <button type="button" class="btn btn-danger" onClick={()=>props.dispatch({type : 'CLEAR'})}>Restart</button>
    </div>
    );
}

export default ProgressInformations;
