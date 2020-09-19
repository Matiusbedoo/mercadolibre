import React, { useState } from 'react';
//Importar Componentes
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Products from './components/Products';

function App() {

  const [state, setstate] = useState("")
  console.log(state)
  return (
    <>
      <Header></Header>
      <SearchBar termino = {x=>setstate(x)}></SearchBar>
      <Products termino = {state}></Products>
      
    </>
  );
}

export default App;
