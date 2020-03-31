import React, {useState} from 'react';
import Navigation from './Navigation';
import DayNight from './DayNight';
import Box from './Box/Box';
import {lightTheme} from './themes';
import BoxImage from './Box/BoxImage';
import BoxWrapper from './Box/BoxWrapper';
import BoxContent from './Box/BoxContent';

const GalleryPage = () => {
  const [dateTime, setDateTime] = useState('day');
  return (
    <section id="gallery">
      <Navigation></Navigation>
      <DayNight dateTime={dateTime} setDateTime={setDateTime}></DayNight>
      <Box motive={lightTheme}>
        <BoxImage motive={lightTheme} light="box_temp.svg" dark="box_temp_dark.svg"></BoxImage>
        <BoxWrapper>
          <BoxContent>
            <h1>Contact</h1>
          </BoxContent>
        </BoxWrapper>
      </Box>
    </section>
  );
};

export default GalleryPage;
