// import logo from './logo.svg';
import './App.css';

import {
  NavBar 
 } from './ui-components';
 import {
  Footer 
 } from './ui-components';
 


 import {
  Pets 
 } from './ui-components';
 <Pets />
function App() {

const navbarOverrides = {
   "A":{
     style: {
        cursor:"pointer",
     },
     onClick: ()=>{
         alert("Hello");
         console.log("Thanks you")
     }
   }
}

  return (
    <div className="App">
      <NavBar  width={"100%"} overrides ={navbarOverrides}/>
      <header className="App-header">
      
      <Pets />
      </header >
      <Footer width={"100%"} />
    </div>
  );
}

export default App;
