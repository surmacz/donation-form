import React from 'react'
import { months } from './month-container'
import styles from './summary-section.module.css'

interface Props {
  amount: number | undefined
  date: Date
}

export const SummarySection: React.FC<Props> = ({ amount, date }) => {
  const getMonthsDiff = () => {
    const now = new Date()
    return (
      (date.getFullYear() - now.getFullYear() - 1) * 12 +
      date.getMonth() +
      12 -
      now.getMonth()
    )
  }

  if (amount === 0 || amount === undefined) {
    return null
  }

  return (
    <div className={styles.container}>
      <div className={styles.total}>
        <div className={styles.label}>Total amount</div>
        <div className={styles.amount} data-testid="summary-total-amount">
          ${new Intl.NumberFormat('en-US').format(getMonthsDiff() * amount)}
        </div>
      </div>
      <div className={styles.notice} data-testid="summary-notice">
        You’re will be sending{' '}
        <strong>${new Intl.NumberFormat('en-US').format(amount)}</strong> every
        month, until{' '}
        <strong>
          {months[date.getMonth()]} {date.getFullYear()}
        </strong>
        . Thank you!
      </div>
    </div>
  )
}
