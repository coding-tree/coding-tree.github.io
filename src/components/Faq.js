import React from 'react';

function Faq({children}) {
  return (
    <section id="faq">
      <div className="container">
        <h1>FAQ</h1>
        {children}
      </div>
    </section>
  );
}

export default Faq;
