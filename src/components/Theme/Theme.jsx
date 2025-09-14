// libs
import { useState } from 'react';

// styles
import classes from './styles.module.css';

export default function Theme({ newTheme }) {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const buttons = [
    "colors_default",
    "colors_dark",
    "colors_pink",
    "colors_pastel",
    "colors_space",
  ];

  const onClickTheme = (className) => {
    newTheme(className);
    setIsShowMenu(false);
  }

  return (
    <>
      <button className={classes.themeButton} onClick={() => setIsShowMenu(prev => !prev)}>🎨</button>
      {
        isShowMenu &&
        <div className={classes.menu}>
          {
            buttons.map(buttonClass =>
              <button key={buttonClass} className={`${buttonClass} ${classes.theme}`} onClick={() => onClickTheme(buttonClass)}></button>
            )
          }
        </div>
      }
    </>
  )
}