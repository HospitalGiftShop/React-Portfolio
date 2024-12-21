
import Header from './components/UI/Header.jsx';
import Footer from './components/UI/Footer.jsx';
import Container from './components/UI/Container.jsx';
import './App.css';
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('About');
  return (
    <div>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Container
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Footer />
    </div>
  );
};

export default App;