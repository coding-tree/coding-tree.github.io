import React from 'react';
import {node} from 'prop-types';

function CompanyDescription({children}) {
  return <div className="description">{children}</div>;
}

CompanyDescription.propTypes = {
  children: node.isRequired,
};      

export default CompanyDescription;
