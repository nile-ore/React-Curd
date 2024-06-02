import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar'; 
import AddUser from './components/AddUser';
import AllUser from './components/AllUser';
import EditUser from './components/EditUser';
import DeleteUser from './components/DeleteUser';

import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<AllUser />} /> 
        <Route path='/add' element={<AddUser />} />
        <Route path='/edit/:id' element={<EditUser />} />
        <Route path='/delete/:id' element={<DeleteUser />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
