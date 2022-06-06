import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import { ToastContainer } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Contact from './Components/Contact/Contact';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
       <Route path={'/'} element={<Home></Home>}></Route>
       <Route path={'/login'} element={<Login></Login>}></Route>
       <Route path={'/register'} element={<Register></Register>}></Route>
       <Route path={'/aboutus'} element={<AboutUs></AboutUs>}></Route>
       <Route path={'/contact'} element={<Contact></Contact>}></Route>
       <Route path={'/dashboard'} element={<Dashboard></Dashboard>}></Route>
     </Routes>
     <Footer></Footer>
     <ToastContainer/>
    </div>
  );
}

export default App;
