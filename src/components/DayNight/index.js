import React, {useState} from 'react';
import Lottie from 'react-lottie';
import * as day from './day.json';
import * as night from './night.json';
import * as dayToNight from './day-to-night.json';
import * as nightToDay from './night-to-day.json';

const DayNight = ({dateTime, setDateTime}) => {
  const background = {
    day,
    night,
    dayToNight,
    nightToDay,
  };

  const options = {
    loop: dateTime === 'day' || dateTime === 'night',
    autoplay: true,
    viewBox: '',
    animationData: background[dateTime].default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  console.log(dateTime);

  return (
    <div className="App" style={{height: '100vh'}}>
      <Lottie
        isClickToPauseDisabled={true}
        speed={1}
        options={options}
        eventListeners={[
          {
            eventName: 'complete',
            callback: () =>
              setDateTime(prevState => {
                console.log(prevState);
                return prevState === 'dayToNight' ? 'night' : 'day';
              }),
          },
        ]}></Lottie>
    </div>
  );
};

export default DayNight;
