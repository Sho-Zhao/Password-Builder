import './App.css';
import Display from './Display';
import Controller from './Controller';

function generator(isCapital=false,isSymbol=false){

  const passlength=8; //Password length
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
      return generator(isCapital,isSymbol);
    }
  }else if(isCapital){
    if(password.includes(capitalSample)){
      return password;
    }else{
      return generator(isCapital,isSymbol);
    }
  }else if(isSymbol){
    if(password.includes(symbolSample)){
      return password;
    }else{
      return generator(isCapital,isSymbol);
    }
  }else{
    return password;
  }
  //Judge includes capital, symbol
}

function App() {
  let password=generator();
  return (
    <div className="App">
      <header className="App-header">
        <Display message={password}/>
      </header>
      <Controller/>
    </div>
  );
}

export default App;
