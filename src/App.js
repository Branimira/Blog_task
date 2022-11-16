import './App.css';
//import Button from 'react-bootstrap/esm/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Blog from './components/Blog';
import { Outlet } from 'react-router-dom';

function App() {


  return (
    <div className="App">   
      <Header/>
      <Outlet />
    </div>
  );
}

export default App;
