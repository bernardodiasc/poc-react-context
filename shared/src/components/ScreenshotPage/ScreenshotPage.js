import * as React from 'react'

import * as styles from './ScreenshotPage.module.css'

const ScreenshotPage = ({
  screen,
  imgSrc,
  AppImg
}) => {
  const Img = AppImg
    ? AppImg
    : () => <img src={imgSrc} className={styles.img} />

  return (
    <article className={styles.component}>
      {imgSrc && (
        <Img src={imgSrc} className={styles.img} />
      )}
    </article>
  )
}

export default ScreenshotPage
