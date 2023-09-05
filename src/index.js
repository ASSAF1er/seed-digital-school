import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import App from './App';
import SideBar from './components/SideBar';
import DashBoard from './pages/DashBoard';
import InfosPerso from './pages/InfosPerso';
import InfosFormation from './pages/InfosFormation';
import InfosContact from './pages/InfosContact';
import GestionEleves from './pages/GestionEleves';
import StudentListProvider from './utils/StudentListContext';
import Formations from './pages/Formations';
import Comptabilite from './pages/Comptabilite';
import EspaceAdmin from './pages/EspaceAdmin';
import MonProfil from './pages/MonProfil';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Router>
    <StudentListProvider>
    <SideBar/>
      <Routes>
        <Route path='/' element={<DashBoard/>}/>
        <Route path='/InfosPerso' element={<InfosPerso/>}/>
        <Route path='/InfosFormation' element={<InfosFormation/>}/>
        <Route path='/InfosContact' element={<InfosContact/>}/>
        <Route path='/gestionEleves' element={<GestionEleves/>}/>
        <Route path='/formations' element={<Formations/>}/>
        <Route path='/comptabilite' element={<Comptabilite/>}/>
        <Route path='/espaceAdmin' element={<EspaceAdmin/>}/>
        <Route path='/MonProfil' element={<MonProfil/>}/>

      </Routes>
    <App />
    </StudentListProvider>
    </Router>
  </React.StrictMode>
);

