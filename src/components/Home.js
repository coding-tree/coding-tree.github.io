import React, { lazy } from "react";

const Formik = lazy(() => import("./Formik"));

const DISCORD_LINK = "https://discord.gg/ZevtyMf";
const FACEBOOK_LINK = "https://www.facebook.com/CodingTreeFoundation/";
const GITHHUB_LINK = "https://github.com/orgs/codingtreefoundation";

function Home() {
  return (
    <PageUnderConstruction title="Strona w budowie">
      <FindUs title="Znajdź nas na:">
        <SocialLink url={DISCORD_LINK} className="fa-discord" />
        <SocialLink url={FACEBOOK_LINK} className="fa-facebook-square" />
        <SocialLink url={GITHHUB_LINK} className="fa-github-square" />
      </FindUs>
      <Formik></Formik>
    </PageUnderConstruction>
  );
}

function PageUnderConstruction({ children, title }) {
  return (
    <main id="home">
      <div className="container">
        <div>
          <img src="/logo.svg" alt="" />
        </div>
        <h1>{title}</h1>
        {children}
      </div>
    </main>
  );
}

function FindUs({ children, title }) {
  return (
    <div>
      <h2>{title}</h2>
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
