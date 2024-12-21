
import Nav from './components/UI/Nav.jsx';

// Function that renders the header & exports
export default function Header({ currentPage, setCurrentPage }) {
  return (
    <div className="headerParent" style={{ padding: "0px 0px 10px 43px" }}>
      <p id="header-text">TARA MEANS</p>
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}