import React from 'react';

function Footer() {
  const date = new Date();
  return (
    <footer>
      <div className="container">
        <h1>Copyright &copy; {date.getFullYear()} | Coding Tree </h1>
      </div>
    </footer>
  );
}

export default Footer;
