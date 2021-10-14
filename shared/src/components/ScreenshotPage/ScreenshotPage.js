import * as React from 'react'

import * as styles from './ScreenshotPage.module.css'

const ScreenshotPage = ({
  screen,
  DOMAIN_URL,
}) => {
  return (
    <article className={styles.component}>
      {screen?.screenshot && DOMAIN_URL && (
        <img src={`${DOMAIN_URL}screenshots/desktop/${screen.screenshot}`} />
      )}
    </article>
  )
}

export default ScreenshotPage
