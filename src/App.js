// import './App.css';
import Home from './components/user/home/home';
import NavBar from './components/user/navBar/navBar';
import LogIn from './components/user/logIn/logIn'
import SignIn from './components/user/signIn/signIn';
import { Routes, Route } from 'react-router-dom';
import Details from './components/user/details/details';
import Landing from './components/user/Landing/Landing';
import Error from './components/user/error/error';
import CreateProduct from './components/user/CreateProduct/CreateProduct';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/home/log-in' element={<LogIn />} />
          <Route exact path='/home/sign-in' element={<SignIn />} />
          <Route exact path='/home/detail/:id' element={<Details />} />
          <Route path='*' element={<Error/>}/>
          <Route exact path="/createProduct" element={<CreateProduct/>} />

        </Routes>
      </header>
    </div>
  );
}

export default App;
