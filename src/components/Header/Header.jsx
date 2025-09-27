// styles
import classes from './styles.module.css';

export default function Header() {
  return (
    <header className={classes.root}>
      <h1 className={classes.headerText}>Դասացուցակ</h1>
      <p className={classes.beta}>beta</p>
    </header>
  )
}