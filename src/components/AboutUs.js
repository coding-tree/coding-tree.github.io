import React, {useEffect, useState, lazy} from 'react';

const Navigation = lazy(() => import('./Navigation'));
const NavigationMobile = lazy(() => import('./NavigationMobile'));
const Team = lazy(() => import('./Team'));
const TeamPerson = lazy(() => import('./TeamPerson'));

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

  const isDesktop = documentWidth > 896;

  return (
    <section id="about-us">
      <div className="container">
        {isDesktop ? <Navigation></Navigation> : <NavigationMobile></NavigationMobile>}
        <Team
          title="Nasz Team"
          subtitle="Lorem ipsum Sit"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa dolorum obcaecati vel commodi, molestiae pariatur quasi repudiandae odio deserunt">
          <TeamPerson src="/images/1.jpg" name="Damian Ospara"></TeamPerson>
          <TeamPerson src="/images/2.jpg" name="Józef Rzadkosz"></TeamPerson>
          <TeamPerson src="/images/3.jpg" name="Jakub Wojtoń"></TeamPerson>
          <TeamPerson src="/images/4.jpg" name="Łukasz Strobejko"></TeamPerson>
        </Team>
      </div>
    </section>
  );
}

export default AboutUs;
