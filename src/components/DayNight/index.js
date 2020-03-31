import React from 'react';
import Lottie from 'react-lottie';

import * as day from './day.json';
import * as dayToNight from './day-to-night.json';
import * as nightToDay from './night-to-day.json';
import * as night from './night.json';

import {string, func} from 'prop-types';
import {withRouter} from 'react-router-dom';

const DayNight = ({dateTime = 'day', setDateTime, location}) => {
  const background = {
    day,
    night,
    dayToNight,
    nightToDay,
  };

  const changeClass = () => (location.pathname !== '/' ? 'background' : 'background remove-ground');

  const options = {
    loop: dateTime === 'day' || dateTime === 'night',
    autoplay: true,
    animationData: dateTime && background[dateTime].default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className={changeClass()}>
      <Lottie
        isClickToPauseDisabled={true}
        speed={1}
        options={options}
        eventListeners={[
          {
            eventName: 'complete',
            callback: () =>
              setDateTime(prevState => {
                return prevState === 'dayToNight' ? 'night' : 'day';
              }),
          },
        ]}></Lottie>
    </div>
  );
};

DayNight.propTypes = {
  dateTime: string,
  setDateTime: func.isRequired,
};

export default withRouter(DayNight);
