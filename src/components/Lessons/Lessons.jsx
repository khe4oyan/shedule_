// libs
import { useState, useEffect } from 'react';

// components
import Lesson from '../Lesson'
import Weekend from '../Weekend';
import BeforeClass from '../BeforeClass';
import AfterClass from '../AfterClass';
import Break from '../Break';
import ShowWeekLessons from '../ShowWeekLessons/ShowWeekLessons';

// utils
import filterLessons from '../../utils/filterLessons';
import getDateTime from '../../utils/getDateTime'

// constants
import lessons from '../../constants/lessons';
import { statuses as lessonStatuses } from "../Lesson/Lesson"

// styles 
import classes from './styles.module.css';

const scenarioStatuses = {
  lesson: "LESSON",
  weekend: "WEEKEND",
  afterClass: "AFTER_CLASS",
  beforeClass: "BEFORE_CLASS",
  break: "BREAK",
};

export default function Lessons() {
  const [appStatus, setAppStatus] = useState(scenarioStatuses.lesson);
  const [filteredLessons, setFilteredLessons] = useState([]);

  const calculateDayShedule = (inputRes) => {
    const result = [...inputRes];
    const currentDate = new Date();
    const currentTime = currentDate.getTime();

    for (let i = 0; i < result.length; ++i) {

      const lesson = result[i];
      const startTime = getDateTime(lesson.start);
      const endTime = getDateTime(lesson.end);

      // check before class start
      if (currentTime < startTime) {

        // check firts lesson
        if (i === 0) {
          setAppStatus(scenarioStatuses.beforeClass);
        } else {
          setAppStatus(scenarioStatuses.break);
        }
        break;
      } else {
        // check current lesson
        if (currentTime >= startTime && currentTime < endTime) {
          lesson.status = lessonStatuses.CURRENT;
          setAppStatus(scenarioStatuses.lesson);
          break;
        } else {
          // check last lesson
          lesson.status = lessonStatuses.COMPLETED;
          if (i === (result.length - 1)) {
            setAppStatus(scenarioStatuses.afterClass);
          } else {
            continue;
          }
        }
      }
    }

    setFilteredLessons(result);
  }

  const initShedule = (inputLessons) => {
    const result = filterLessons(inputLessons);
    console.log(result);
    
    if (result) {
      calculateDayShedule(result);
    } else {
      setAppStatus(scenarioStatuses.weekend);
    }
  }

  useEffect(() => {
    initShedule(lessons);
  }, []);

  useEffect(() => {
    if (appStatus === scenarioStatuses.afterClass || appStatus === scenarioStatuses.weekend) {
      return;
    }

    // Считаем, сколько миллисекунд до следующей "круглой" минуты
    const now = new Date();
    const msUntilNextMinute = 60000 - (now.getSeconds() * 1000 + now.getMilliseconds());

    const timeoutId = setTimeout(() => {
      calculateDayShedule(filteredLessons);
    }, msUntilNextMinute);

    // Чистим оба таймера при размонтировании
    return () => {
      clearTimeout(timeoutId);
    };
  }, [filteredLessons]);

  return (
    <div className={classes.root}>
      {appStatus === scenarioStatuses.weekend && <Weekend />}
      {appStatus === scenarioStatuses.beforeClass && <BeforeClass startedTime={filteredLessons[0].start} />}
      {appStatus === scenarioStatuses.afterClass &&
        <>
          <AfterClass />
          <CompletedLessons filteredLessons={filteredLessons} />
        </>
      }
      {appStatus === scenarioStatuses.break && <Break filteredLessons={filteredLessons} />}

      {
        (
          appStatus === scenarioStatuses.lesson ||
          appStatus === scenarioStatuses.beforeClass ||
          appStatus === scenarioStatuses.break
        ) &&
        <>
          {
            filteredLessons.filter((lessonData) => lessonData.status !== lessonStatuses.COMPLETED)
              .map((lessonData, ind) =>
                <Lesson
                  key={`${ind} ${JSON.stringify(lessonData)}`}
                  data={lessonData}
                />
              )
          }

          <CompletedLessons filteredLessons={filteredLessons} />
        </>
      }

      <ShowWeekLessons />
    </div>
  )
}

function CompletedLessons({ filteredLessons }) {
  return (
    <details className={classes.completedLessons}>
      <summary>completed lessons</summary>
      <div className={classes.completedLessonsList}>
        {
          filteredLessons.filter((lessonData) => lessonData.status === lessonStatuses.COMPLETED)
            .map((lessonData, ind) =>
              <Lesson
                key={`${ind} ${JSON.stringify(lessonData)}`}
                data={lessonData}
              />
            )
        }
      </div>
    </details>
  );
}