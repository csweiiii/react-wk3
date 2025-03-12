import React from 'react';


const Header = () => {
  return (
    <header className="header">
      <h1>Vegetables</h1>
      <div className="header-right">
        <img src="images/btn_facebook.png" alt="facebook button" className="btn-facebook" />
        <img src="images/btn_instagram.png" alt="instagram button" className="btn-instagram" />
        <button className="btn-login">LOGIN</button>
        <button className="btn-join">JOIN</button>
      </div>

      <nav className="nav">
        {['Home', 'About Us', 'Vegetables', 'Online', 'Contact'].map((item) => (
          <h2 key={item} className="nav-btn">{item}</h2>
        ))}
      </nav>
    </header>
  );
};

export default Header;
