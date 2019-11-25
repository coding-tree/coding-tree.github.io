import React from 'react';

function Footer() {
  const date = new Date();
  return (
    <footer>
      <div className="container">
        <p>Copyright &copy; {date.getFullYear()} | Coding Tree </p>
      </div>
    </footer>
  );
}

export default Footer;
