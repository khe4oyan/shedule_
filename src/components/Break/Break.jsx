// libs
import { useEffect, useState } from 'react';

// utils
import getDateTime from '../../utils/getDateTime';
import timerFormat from '../../utils/timerFormat';

// constants
import { statuses } from '../Lesson/Lesson';

// styles
import classes from './styles.module.css';

export default function Break({ filteredLessons }) {
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    for (let i = 0; i < filteredLessons.length; ++i) {
      if (filteredLessons[i].status === statuses.DEFAULT) {
        const startTime = getDateTime(filteredLessons[i].start);
        const currentTime = new Date().getTime();

        window.addEventListener("focus", () => {
          const currentDate = new Date();
          const currentTime = currentDate.getTime();
          const endTime = getDateTime(filteredLessons[i].start);
          const newTimer = Math.floor((endTime - currentTime) / 1000);

          setTimer(newTimer);
        });

        setTimer(Math.floor((startTime - currentTime) / 1000));
        break;
      }
    }
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
      <p className={classes.title}>Ընդմիջում</p>
      <p>{timerFormat(timer)}</p>
    </div>
  )
}