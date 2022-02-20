
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Life from './components/pages/Life';
import SignUp from './components/pages/SignUp';
import Achievements from './components/pages/Achievements';


function App() {
  return (
    <>
     <Router>
       <NavBar />  
        
       <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/life' element={<Life/>} />
          <Route path='/achievements' element={<Achievements/>} />
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/fb' element='https://www.facebook.com/' />
        </Routes>    
     </Router>
    </>
  );
}

export default App;
