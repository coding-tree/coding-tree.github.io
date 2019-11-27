import React from "react";
import { withRouter } from "react-router-dom";

function NotFound({ history }) {
  const goToHome = () => {
    return history.replace("/");
  };
  return (
    <main id="not-found">
      <div className="container">
        <h1>Niestety nic tutaj nie znaleziono...</h1>
        <button className="primary-button" onClick={goToHome}>
          Powrót do strony głównej
        </button>
      </div>
    </main>
  );
}

export default withRouter(NotFound);
