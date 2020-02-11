import React from 'react';

function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <p>Copyright &copy; {date} | Coding Tree </p>
      </div>
    </footer>
  );
}

export default Footer;
