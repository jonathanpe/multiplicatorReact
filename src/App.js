import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pad from './Pad';
import Texts from './Texts';
import ReducerProvider from './ReducerProvider';
import { initialState } from '.';

function App() {

  const [action, setAction] = React.useState(false)
  const ReducerContext = React.createContext(initialState);
  console.log('gfdgf')


  return (
    <>
    <ReducerProvider initialState = {initialState} ReducerContext = {ReducerContext}>
        <Texts ReducerContext = {ReducerContext}/>
        <Pad ReducerContext = {ReducerContext}/>
      </ReducerProvider>
    </>
  );
}

export default App;
