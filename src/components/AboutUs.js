import React, {useEffect, useState} from 'react';
import Navigation from './Navigation';

function AboutUs() {
  const [documentWidth, setDocumentWidth] = useState(null);
  const checkDeviceWidth = () => {
    setDocumentWidth(document.body.offsetWidth);
  };
  useEffect(() => {
    setDocumentWidth(document.body.offsetWidth);
    window.addEventListener('resize', checkDeviceWidth);
    return () => {
      window.removeEventListener('resize', checkDeviceWidth);
    };
  }, [documentWidth]);

  return (
    <section id="about-us">
      <div className="container">
        <Navigation documentWidth={documentWidth}></Navigation>
        <h2>Lorem Ipsum</h2>
      </div>
    </section>
  );
}

export default AboutUs;
