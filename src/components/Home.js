import React from "react";

const DISCORD_LINK = "https://discord.gg/ZevtyMf";
const FACEBOOK_LINK = "https://www.facebook.com/CodingTreeFoundation/";
const GITHHUB_LINK = "https://github.com/orgs/codingtreefoundation";

function Home() {
  return (
    <PageUnderConstruction>
      <FindUs>
        <SocialLink url={DISCORD_LINK} className="fa-discord" />
        <SocialLink url={FACEBOOK_LINK} className="fa-facebook-square" />
        <SocialLink url={GITHHUB_LINK} className="fa-github-square" />
      </FindUs>
    </PageUnderConstruction>
  );
}

function PageUnderConstruction({ children }) {
  return (
    <main id="home">
      <div className="container">
        <div>
          <img src="/logo.svg" alt="" />
        </div>
        <h1>Strona w budowie</h1>
        {children}
      </div>
    </main>
  );
}

function FindUs({ children }) {
  return (
    <div>
      <h2>Znajdź nas na:</h2>
      <div className="social">{children}</div>
    </div>
  );
}

function SocialLink({ url, className }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <i className={"fab " + className}></i>
    </a>
  );
}

export default Home;
