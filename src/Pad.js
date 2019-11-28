import React from 'react';
import './Pad.css';
import { reducer, initialState } from '.';

function Pad(props) {
    const [state, dispatch] = React.useContext(props.ReducerContext);
    console.log(state)
    console.log('dfgdfggdf')

    const Buttons = ['1','2','3','4','5','6','7','8','9','0']
    const handleNum = (e)=> {
        const {value} = e.currentTarget
        let questions = [...state.questions]
        
        let entry = questions[state.stage].entry ===null ? value : questions[state.stage].entry + value
       
        questions[state.stage].entry = entry

        dispatch({type : 'UPDATEANSWER', questions });

    }

    const handleAnswer = (e) => {

        dispatch({type : 'SENDANSWER' });
    }

  return (
    <div className="Pad">
        <div className = "numericsBtns">
            {Buttons.map(number=>{
            return <button type="button" value ={number} class="btn btn-dark padBtn" onClick={handleNum}>{number}</button>
             })}
        </div>
        <div className ="treatmentsBtn">
            <button type="button" class="btn btn-danger" onClick={()=>dispatch({type : 'CLEARLASTENTRY'})}>Clear</button>
            <button type="button" class="btn btn-primary" onClick = {handleAnswer}>Ok</button>
        </div>
    </div>
  );
}

export default Pad;
