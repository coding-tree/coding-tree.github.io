import React from "react";

function Home() {
  return (
    <main id="home">
      <div className="container">
        <div>
          <img src="/logo.svg" alt="" />
        </div>
        <h1>Strona w budowie</h1>
        <div>
          <h2>Znajdź nas na:</h2>
          <div className="social">
            <a href="">
              <i className="fab fa-discord"></i>
            </a>
            <a href="">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="">
              <i className="fab fa-github-square"></i>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
