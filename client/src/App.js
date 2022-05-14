import {BrowserRouter, Routes, Route, Link, Navigate} from 'react-router-dom';
import GameOne from './components/GameOne';
import ManagePlayer from './components/ManagePlayer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <h2 className='nav'>
        <Link to={"/players/list"}>Manage Players</Link> | 
        <Link to={"/status/game/1"}>Manage Player Status</Link>
      </h2>
      <div className='box'>
        <Routes>
          <Route path="/*" element={<ManagePlayer/>} />
          <Route path="/status/game/1" element={<GameOne />}/>
          <Route path='' element={<Navigate replace to={'/players/list'} />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
