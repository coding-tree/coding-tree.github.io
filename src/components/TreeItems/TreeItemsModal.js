import React from "react";
import { node } from "prop-types";

function TreeItemsModal({ children }) {
  return <div className="button-modal-container">{children}</div>;
}

TreeItemsModal.propTypes = {
  children: node.isRequired
};

export default TreeItemsModal;
