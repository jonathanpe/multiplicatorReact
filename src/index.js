import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const buildMultiplications = () => {
    const multiplicators = []
    for(let i=0; i<10; i++){
        multiplicators[i] = {number1 : Math.floor(Math.random()*10), number2 : Math.floor(Math.random()*10), entry:null, goodAnswer : null}
        multiplicators[i].result = multiplicators[i].number1 * multiplicators[i].number2
    }
    console.log(multiplicators)
    return multiplicators
}

export const initialState = { stage : 0, score:0, questions : buildMultiplications(), endtest : false};



export const reducer = (state, action) => {

    switch(action.type){
        
        case 'UPDATEANSWER' :
            const {questions} = {...action}
            console.log({ ...state, questions})

            // renvoi une copie du state et pas le state lui-même
            return { ...state, questions}

            case 'SENDANSWER' : 

                let newQuestions = [...state.questions]
                let score = state.score;
                let stage = state.stage+1;
                let endtest = stage>9;
                newQuestions[state.stage].goodAnswer = parseInt(state.questions[state.stage].entry) === state.questions[state.stage].result
                if(newQuestions[state.stage].goodAnswer)score++


                return {...state,questions:newQuestions,score,stage, endtest}
            

            case 'CLEARLASTENTRY' :
                let updatedQuestions = [...state.questions]
                updatedQuestions[state.stage].entry = null

               return {...state, questions:updatedQuestions}
            
        
        
        case 'CLEAR':
            return { ...initialState,questions : buildMultiplications() } // permet de remettre à jour le state

        default:
            return state;
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
