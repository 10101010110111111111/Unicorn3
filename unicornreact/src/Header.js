import './index.css';

function Header() {
  return (
    <header>
      <h1>Unicorn React App</h1>
      <nav>
        <ul class= "liWithoutDots">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;