import Navbar from "./Navbar.jsx";

function Header() {
  return (
    <header className="header">
      <img
        className="nav-logo"
        src="/src/assets/react-logo.png"
        width="40px"
        alt="React logo"
      />
      <Navbar />
    </header>
  );
}
export default Header;
