
import React from 'react';
import { reducer, initialState } from '.';


function ReducerProvider(props) {

    const [state, dispatch] = React.useReducer(reducer, props.initialState);
  


  return (
    <props.ReducerContext.Provider value={[state, dispatch]}>
    {props.children}
    </props.ReducerContext.Provider>
  );
}

export default ReducerProvider;