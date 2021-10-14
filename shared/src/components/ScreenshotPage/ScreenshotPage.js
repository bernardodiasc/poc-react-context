import * as React from 'react'

import * as styles from './ScreenshotPage.module.css'

const ScreenshotPage = ({
  screen,
  DOMAIN_URL,
  AppImg
}) => {
  const ImgSrc = `${DOMAIN_URL}screenshots/desktop/${screen.screenshot}`

  const Img = AppImg
    ? AppImg
    : () => <img src={ImgSrc} />

  return (
    <article className={styles.component}>
      {ImgSrc && (
        <Img src={ImgSrc} />
      )}
    </article>
  )
}

export default ScreenshotPage
