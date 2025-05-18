const Header = () => {
  return (
    <div className="header-area">
      <nav className="nav">
        <a className="nav-link" aria-current="page" href="#home">
          Home
        </a>
        <a className="nav-link" href="#about">
          About Me
        </a>
        <a className="nav-link" href="#projects">
          Projects
        </a>
        <a className="nav-link" href="#contact">
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Header;
