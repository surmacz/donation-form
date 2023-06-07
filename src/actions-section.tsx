import React from 'react'
import styles from './actions-section.module.css'

interface Props {}

export const ActionsSection: React.FC<Props> = () => {
  return (
    <div className={styles.container}>
      <button className={styles.cancel}>Cancel</button>
      <button className={styles['cancel-mini']}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
            fill="#595D7B"
          />
          <path
            d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
            fill="black"
            fillOpacity="0.2"
          />
        </svg>
      </button>
      <button className={styles.continue}>Continue</button>
    </div>
  )
}
