import React from 'react';
import './App.css';
import FirstPage from './components/FirstPage';
import Menu from "./components/menu";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/thirdPage";
import FourthPage from "./components/FourthPage";
import FifthPage from "./components/FifthPage";
import SixthPage from "./components/SixthPage";



function App() {
  return (
      <div>
        <Menu/>
    <FirstPage/>
       <SecondPage/>
          <ThirdPage/>
          <FourthPage/>
          <FifthPage/>
        <SixthPage/>
      </div>
  );
}

export default App;
