import React from 'react';
import './Texts.css';
import {reducer, initialState} from './index.js'
import Question from './Question';
import Calcul from './Calcul';
import ProgressInformations from './ProgressInformations';

function Texts(props) {

    const [state, dispatch] = React.useContext(props.ReducerContext);

    const isWorking = 
   
    React.useEffect(() => {

        return () => {
            console.log('unmount ....')
        }

    }, [dispatch]); // rien n'est watch au niveau des states


  return (
      <>
        <Question  number1 = {state.stage<10 ?  state.questions[state.stage].number1 : false} number2 = {state.stage<10 ?  state.questions[state.stage].number2 : false}/>
        <Calcul entry = {state.stage<10 ? state.questions[state.stage].entry : false} />        
        <ProgressInformations endtest = {state.endtest} questions = {state.questions} score = {state.score} stage = {state.stage} dispatch={dispatch}/>
    </>
    );
}

export default Texts;
