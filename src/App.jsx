
import Portfolio from './pages/Portfolio.jsx';
import Header from './components/Header.jsx';
import Footer from '/components/Footer.jsx';
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('About');
  return (
    <div>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Portfolio
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        />
        <Footer />

    </div>
  );
}

export default App;