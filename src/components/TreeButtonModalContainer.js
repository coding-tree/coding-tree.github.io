import React from 'react';
import TreeButtonModal from './TreeButtonModal';

function TreeButtonModalContainer({documentWidth}) {
  const setButtonsTopPosition = (topMedium, topMobile, topSmallMobile) => {
    if (documentWidth > 568) return topMedium;
    if (documentWidth > 433) return topMobile;
    return topSmallMobile;
  };
  return (
    <div className="button-modal-container">
      <TreeButtonModal title="Example Title 1" top={setButtonsTopPosition('43%', '44.5%', '49%')} left="33%">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, maiores, veritatis reprehenderit nostrum vel
        voluptatibus dolore recusandae consequatur a quod obcaecati blanditiis aliquam voluptas velit optio quidem
        molestiae numquam harum?
      </TreeButtonModal>
      <TreeButtonModal title="Example Title 2" top={setButtonsTopPosition('53%', '54.5%', '57.5%')} right="39%">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corrupti id molestiae repellendus at rem vero
        dolorum. Necessitatibus incidunt est ea quasi neque! Repudiandae voluptate commodi earum, magni corrupti omnis.
      </TreeButtonModal>
      <TreeButtonModal title="Example Title 3" top={setButtonsTopPosition('63%', '65%', '66%')} left="38.5%">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corrupti id molestiae repellendus at rem vero
        dolorum. Necessitatibus incidunt est ea quasi neque! Repudiandae voluptate commodi earum, magni corrupti omnis.
      </TreeButtonModal>
      <TreeButtonModal title="Example Title 4" top={setButtonsTopPosition('72.5%', '74.5%', '75.5%')} right="37%">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corrupti id molestiae repellendus at rem vero
        dolorum. Necessitatibus incidunt est ea quasi neque! Repudiandae voluptate commodi earum, magni corrupti omnis.
      </TreeButtonModal>
    </div>
  );
}

export default TreeButtonModalContainer;
