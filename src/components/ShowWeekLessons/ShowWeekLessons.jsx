// libs
import { useCallback, useState } from 'react';

// components
import Lesson from '../Lesson';

// constants
import lessons from '../../constants/lessons';

// styles
import classes from './styles.module.css';

export default function ShowWeekLessons() {
  const initState = useCallback(() => {
    const dayNum = new Date().getDay() - 1;

    if (dayNum < 0 || dayNum > 4) return -1;

    return dayNum;
  });

  const [dayscheduleNum, setDayscheduleNum] = useState(initState);

  const days = ["Երկ", "Երեք", "Չորք", "Հինգ", "Ուրբ"];

  return (
    <div className={classes.root}>
      <h2>Ամբողջական գրաֆիկ</h2>

      <div className={classes.buttons}>
        {
          days.map((day, ind) =>
            <button key={day} className={`${classes.button} ${ind === dayscheduleNum && classes.buttonActive}`} onClick={() => setDayscheduleNum(ind)}>{day}</button>
          )
        }
      </div>

      <div className={classes.lessons}>
        {
          lessons[dayscheduleNum]?.map(
            (lesson, ind) =>
              <Lesson
                data={{ ...lesson?.getData(), status: "default" }}
                key={`${lesson.title} ${ind}`}
              />
          )
        }
      </div>
    </div>
  )
}