'use client';

import { calculatingRemainingTime } from '@/helpers/date';
import React, { useEffect, useState } from 'react';

function Timer(props: Readonly<{ timeout: Date }>) {
  const [timer, setTimer] = useState('00 : 00 : 00 : 00');

  useEffect(() => {
    const timerId = setInterval(() => {
      const timeout = calculatingRemainingTime(props.timeout);
      const str = `${timeout.days.toString().padStart(2, '0')} : ${timeout.hours
        .toString()
        .padStart(2, '0')} : ${timeout.minutes
        .toString()
        .padStart(2, '0')} : ${timeout.seconds.toString().padStart(2, '0')}`;
      setTimer(str);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [props.timeout]);

  return <div className='timer'>{timer}</div>;
}

export default Timer;
