import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Signup from './component/homepage/bodyofhome/signup';
import PrivateComponent from './component/homepage/bodyofhome/privateComponent';
import Login from './component/homepage/bodyofhome/login';
import Home from './component/Home';
import Services from './component/services';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path='/' element={<Home/>} />
            <Route path='/service' element={<Services/>} />
            <Route path='/pricing' element={<h1>pricing</h1>} />
            <Route path='/aboutUs' element={<h1>aboutUs</h1>} />
            <Route path='/career' element={<h1>career</h1>} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/SignUp' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
