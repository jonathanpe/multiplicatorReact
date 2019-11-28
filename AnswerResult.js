import React from 'react';
import './Question.css';

function Question(props) {
    console.log(props)

    const Buttons = [1,2,3,4,5,6,7,8,9,0]
    const handleNum = (e)=> {
        const {value} = e.currentTarget
        console.log(value)
    }

  return (
    <div class="alert alert-primary" role="alert">
        Donnez le resultat de : {props.number1} X {props.number2}
    </div>
  );
}

export default Question;
