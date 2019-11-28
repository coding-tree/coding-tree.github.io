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
            <a
              href="https://discord.gg/ZevtyMf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-discord"></i>
            </a>
            <a
              href="https://www.facebook.com/groups/289256475294229/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-square"></i>
            </a>
            <a
              href="https://github.com/damian0o"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github-square"></i>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
