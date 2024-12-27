import { Outlet } from 'react-router-dom';
import Header from './components/UI/Header.jsx';
import Footer from './components/UI/Footer.jsx';
import './App.css';


function App() {

  let items = [
    'bi bi-linkedin',
    'bi bi-github',
    'bi bi-envelope',
  ];

  let pageLinks = [
    'https://www.linkedin.com/in/tarameans/',
    'https://github.com/HospitalGiftShop',
    'mailto:tmeans01@gmail.com'
  ]

  const handleSelectedItem = (item) => {
    console.log(item);
  }

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
      <Footer items={items} pageLinks={pageLinks} onSelectItem={handleSelectedItem} />
    </div>
  );
};

export default App;