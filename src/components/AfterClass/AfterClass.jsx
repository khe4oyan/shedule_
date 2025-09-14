// styles
import classes from './styles.module.css';

export default function AfterClass() {
  return (
     <div className={classes.root}>
      <div className={classes.message}>
        There are no more lessons today
      </div>
    </div>
  )
}