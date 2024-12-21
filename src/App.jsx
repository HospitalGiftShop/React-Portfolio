import { Outlet } from 'react-router-dom';
import Nav from './components/UI/Nav.jsx';
import Footer from './components/UI/Footer.jsx';
import './App.css'


function App() {
  return (
    <>
    
      <Nav />
      <div className="container mt-4">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;