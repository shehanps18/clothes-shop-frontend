import { ToastContainer } from 'react-toastify';
import './App.css';
import CustomNavbar from './componenets/CustomNavbar';
import Login from './componenets/Login';
import Signup from './componenets/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
      <ToastContainer position='top-center'/>
        <CustomNavbar />
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
