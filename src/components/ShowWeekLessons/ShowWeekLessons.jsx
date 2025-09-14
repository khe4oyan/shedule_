// libs
import { useState } from 'react';

// components
import Lesson from '../Lesson';

// constants
import lessons from '../../constants/lessons';

// styles
import classes from './styles.module.css';

export default function ShowWeekLessons() {
  const [daySheduleNum, setDaySheduleNum] = useState(() => {
    const dayNum = new Date().getDay() - 1;
      
    if ( dayNum < 0 || dayNum > 4) return -1;

    return dayNum;
  });

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

  return (
    <div className={classes.root}>
      <h2>Full schedule</h2>
      
      <div className={classes.buttons}>
        {
          days.map((day, ind) =>
            <button key={day} className={`${classes.button} ${ind === daySheduleNum && classes.buttonActive}`} onClick={() => setDaySheduleNum(ind)}>{day}</button>
          )
        }
      </div>

      <div className={classes.lessons}>
        {
          lessons[daySheduleNum]?.map((lesson, ind) =>
            <Lesson
              data={lesson}
              key={ind}
            />
          )
        }
      </div>
    </div>
  )
}