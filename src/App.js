import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';

function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
       <Route path={'/'} element={<Home></Home>}></Route>
       <Route path={'/login'} element={<Login></Login>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
