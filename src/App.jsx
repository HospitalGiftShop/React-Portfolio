import { Outlet } from 'react-router-dom';
import Header from './components/UI/Header.jsx';
import Footer from './components/UI/Footer.jsx';
import './App.css';


function App() {
  return (
    <div>
      <Header />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;