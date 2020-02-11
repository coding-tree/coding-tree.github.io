import React from 'react';
import {node} from 'prop-types';

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

Faq.propTypes = {
  children: node.isRequired,
};

export default Faq;
