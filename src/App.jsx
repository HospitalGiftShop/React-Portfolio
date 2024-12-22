import { Outlet } from 'react-router-dom';
import Header from './components/UI/Header.jsx';
import Footer from './components/UI/Footer.jsx';
import './App.css';


function App() {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Header />
      <main className="flex-grow-1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <Outlet />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;