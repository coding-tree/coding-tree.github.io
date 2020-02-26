import React, {useState} from 'react';

const AboutUs = () => {
  const [fakePath, setFakePath] = useState(`C:\\Coding Tree\\Czarny Pas\\Damian Ospara `);
  return (
    <section id="about-us">
      <div className="background">{/* <BackgroundLarge></BackgroundLarge> */}</div>

      {/* Container */}
      <div className="box">
        <img src="box.svg" alt="" />
        <div className="box-wrapper">
          <div className="box-path">
            <div>
              <h5>Lokalizacja</h5>
            </div>
            <div className="box-path-breadcrumb">
              <i className="fas fa-folder"></i>
              <h5>{fakePath}</h5>
            </div>
            <div>
              <div className="slider-background">
                <button className="slider-button"></button>
              </div>
              <input hidden type="checkbox" />
              <h5>Przełącz motyw</h5>
            </div>
          </div>

          <div className="box-content">
            <div className="box-folders">
              <h1>siema</h1>
            </div>
            <div className="box-info">
              <h1>AVATAR</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
