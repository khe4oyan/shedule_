// libs
import { useEffect, useState, useRef } from 'react';

// utils
import timerFormat from '../../utils/timerFormat';
import getDateTime from '../../utils/getDateTime'

// styles
import classes from './styles.module.css';

export const statuses = {
  DEFAULT: "default",
  CURRENT: "current",
  COMPLETED: "completed",
};

export default function Lesson({ data }) {
  const title = data?.title;
  const teacher = data?.teacher;
  const room = data?.room;
  const start = data?.start;
  const end = data?.end;
  const status = data?.status;

  const [timer, setTimer] = useState(() => {
    if (status === statuses.CURRENT) {
      const currentDate = new Date();
      const currentTime = currentDate.getTime();
      const endTime = getDateTime(end);

      return Math.floor((endTime - currentTime) / 1000);
    } else {
      return null;
    }
  });

  const interval = useRef(null)

  useEffect(() => {
    if (timer === null) { return; }

    interval.current = setInterval(() => {
      setTimer(prev => prev - 1)
    }, 1000);

    return () => {
      clearInterval(interval.current);
    }
  }, []);

  useEffect(() => {
    if (timer < 1) {
      clearInterval(interval.current);
    }
  }, [timer]);

  return (
    <div className={`${classes.root} ${status === statuses.CURRENT && classes.rootCurrent} ${status === statuses.COMPLETED && classes.rootCompleted}`}>
      <div className={classes.mainInfo}>
        <p className={classes.title}>{title}</p>
      </div>

      <div className={classes.details}>
        <p>{teacher}</p>
        <p>{room}</p>
      </div>

      <div className={classes.time}>
        <p>start</p>
        <p>end</p>
        <p>{start}</p>
        <p>{end}</p>
      </div>

      {
        status === statuses.CURRENT &&
        <div className={classes.timer}>
          {timerFormat(timer)}
        </div>
      }
    </div>
  )
}