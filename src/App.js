// import logo from './logo.svg';
import './App.css';
import SignupPage from './Components/Signup';
import {BrowserRouter,Route,Routes} from "react-router-dom";

// import video1 from './videos/video1.mp4'
// import video2 from './videos/video2.mp4'


import Ytclone from './Components/Ytclone';
import Animal from './Components/Animal';
// import Css from './Components/Css';

function App() {
  return (
    <BrowserRouter>
    <>
    <Ytclone/>
    <Routes>
      <Route path='/Animal' Component={Animal}></Route>
      <Route path='/Signup' Component={SignupPage}></Route>
    </Routes>
    {/* <Ytclone vid={video2}/>
    <Subscription info={"I dont have any subscription"}/> */} 
    
    </>
    
    </BrowserRouter>
  
   
  );
}

export default App;

