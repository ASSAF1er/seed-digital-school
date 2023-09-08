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
import NewStudentProvider from './utils/NewStudentContext';
import Connexion from './pages/Conexion';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Router>
    <StudentListProvider>
    <NewStudentProvider>
    <SideBar/>
      <Routes>
        <Route path='/' element={<Connexion/>}/>
        <Route path='/Dashboard' element={<DashBoard/>}/>

        
        <Route path='/NouvelEleve' >
          <Route path='/NouvelEleve/InfosPerso' element={<InfosPerso/>}/>
          <Route path='/NouvelEleve/InfosFormation' element={<InfosFormation/>}/>
          <Route path='/NouvelEleve/InfosContact' element={<InfosContact/>}/>
        </Route>
        

        <Route path='/gestionEleves' element={<GestionEleves/>}/>
        <Route path='/formations' element={<Formations/>}/>
        <Route path='/comptabilite' element={<Comptabilite/>}/>
        <Route path='/espaceAdmin' element={<EspaceAdmin/>}/>
        <Route path='/MonProfil' element={<MonProfil/>}/>

      </Routes>
    <App />
    </NewStudentProvider>
    </StudentListProvider>
    </Router>
  </React.StrictMode>
);

