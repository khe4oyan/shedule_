// libs
import { useEffect, useState } from 'react';

// utils
import getDateTime from '../../utils/getDateTime';
import timerFormat from '../../utils/timerFormat';

// styles
import classes from './styles.module.css';

export default function BeforeClass({ startedTime }) {
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    const startTime = getDateTime(startedTime);
    const currentTime = new Date().getTime();

    setTimer(Math.floor((startTime - currentTime) / 1000));
  }, []);

  useEffect(() => {
    if (timer < 1) {
      return;
    }

    const intervalId = setInterval(() => {
      setTimer(prev => prev - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }
  }, [timer]);

  return (
    <div className={classes.root}>
      <p className={classes.title}>First lesson started at {startedTime}</p>
      <p>{timerFormat(timer)}</p>
    </div>
  )
}