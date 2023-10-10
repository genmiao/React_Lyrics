import logo from './logo.svg';
import './App.css';
import Singer from './Singers';
import Singer1 from './Singer1';
import Singer2 from './Singer2';
import Singer3 from './Singer3';
import Singer4 from './Singer4';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className='App'>
    <div className='headerStyle'>
      <nav>
        <h1>Complete the Lyrics</h1>
      </nav>
    </div>
    <Routes>
      <Route path="singer" element={<Singer />}>

        <Route path="singer1" element={<Singer1 />} /> 
        <Route path="singer2" element={<Singer2 />} /> 
        <Route path="singer3" element={<Singer3 />} /> 
        <Route path="singer4" element={<Singer4 />} />
        {/* <Route path=":id" element={<ProductDisplay />} /> */}
        
      </Route>
    </Routes>
    </div>
  </Router>
  
  );
}

export default App;
