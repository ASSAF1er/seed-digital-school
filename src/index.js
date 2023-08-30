import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import App from './App';
import SideBar from './components/SideBar';
import DashBoard from './pages/DashBoard';
import AjoutEleve from './pages/AjoutEleve';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <SideBar/>
      <Routes>
        <Route path='/' element={<DashBoard/>}/>
        <Route path='/NouvelEleve' element={<AjoutEleve/>}/>
      </Routes>
    <App />
    </Router>
  </React.StrictMode>
);

