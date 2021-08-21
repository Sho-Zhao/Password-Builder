import './App.css';
import Display from './Display';
import Controller from './Controller';
import React,{ useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function Generator(isCapital=false,isSymbol=false,passlength=12){
  const symbol="!#$%&()";   //Symbol
  const capital="ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //Capital
  const letter=isCapital&&isSymbol? "abcdefghijklmnopqrstuvwxyz0123456789"+symbol+capital
              :isCapital? "abcdefghijklmnopqrstuvwxyz0123456789"+capital
              :isSymbol ? "abcdefghijklmnopqrstuvwxyz0123456789"+symbol
              :"abcdefghijklmnopqrstuvwxyz0123456789"
        //To prepare using letters

  const symbolSample=symbol[Math.floor(Math.random()*symbol.length)]; //To judge includes symbol
  const capitalSample=capital[Math.floor(Math.random()*capital.length)];  //To judge includes capital

  let password=[...Array(passlength)].map(()=>letter[Math.floor(Math.random()*letter.length)]).join("");  //Make password

  if(isCapital && isSymbol){
    if(password.includes(capitalSample) && password.includes(symbolSample)){
      return password;
    }else{
      return Generator(isCapital,isSymbol,passlength);
    }
  }else if(isCapital){
    if(password.includes(capitalSample)){
      return password;
    }else{
      return Generator(isCapital,isSymbol,passlength);
    }
  }else if(isSymbol){
    if(password.includes(symbolSample)){
      return password;
    }else{
      return Generator(isCapital,isSymbol,passlength);
    }
  }else{
    return password;
  }
  //Judge includes capital, symbol
}

function App() {
  //State
  const[state,setState]=useState([
    {
      name:"isCapital",
      value:true
    },
    {
      name:"isSymbol",
      value:true
    },
    {
      name:"passLength",
      value:12
    }
  ])

  let password=Generator(state[0].value,state[1].value,state[2].value);

  return (
    <div className="App">
      <header>
        <AppBar position="static">
          <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Password Builder
          </Typography>
          </Toolbar>
        </AppBar>
      </header>
      <div className="App-main">
      <Display message={password}/>
      </div>
      <Controller isCapital={state[0].value} isSymbol={state[1].value} textSize={state[2].value}
        checkChange={handleValue=>{
          const newState=state.map(sta=>
            sta.name===handleValue 
              ? {name:handleValue, value:!sta.value} 
              : sta
            );
            setState(newState);
        }}
        sizeChange={handleValue=>{
          const newState=state.map(sta=>
            sta.name==="passLength"
              ?{name:"passLength",value:handleValue}
              :sta
            );
            setState(newState);
        }}/>
    </div>
  );
}

export default App;
