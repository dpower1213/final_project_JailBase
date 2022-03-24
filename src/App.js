import React, {useContext} from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import normalTheme from './themes/normalTheme';
import Directory from './components/MainMenu';
import { AppContext } from './context/AppContext';
import {Routes, Route} from 'react-router-dom';
import JailPage from './views/JailPage';
import JailPage2 from './views/JailPage2';
import BrowseJail from './views/BrowseJail';
import Search from './views/Search';
import MugCard from './views/MugCard2';
import WatchList from './views/WatchList';
import EditProfile from './views/EditProfile.js';
import Register from './views/Register';
import Login from './views/Login';
import Logout from './views/Logout';

function App() {
  const {user}=useContext(AppContext)
  return (
  <>
    <ThemeProvider theme={normalTheme}>
    <Directory>
    <Routes>
      <Route path="/" element={<JailPage2/>}/>
      <Route path="/JailPage" element={<JailPage/>}/>
      <Route path="/BrowseJail" element={<BrowseJail/>}/>  
      <Route path="/MySearchForm" element={<Search/>}/>  
      <Route path="/MugCard" element={<MugCard/>}/>  
      <Route path="/WatchList" element={<WatchList/>}/>  
      <Route path="/Register" element={<Register/>}/>  
      <Route path="/EditProfile" element={<EditProfile/>}/>  
      <Route path="/Login" element={<Login/>}/>  
      <Route path="/Logout" element={<Logout/>}/>  
    </Routes>
    </Directory>
    </ThemeProvider>
  </>
    
  );
};
export default App;