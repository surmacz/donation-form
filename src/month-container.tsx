import React from 'react'
import styles from './month-container.module.css'

export const increaseDate = (date: Date) => {
  const newDate = new Date(date.toString())
  newDate.setMonth(newDate.getMonth() + 1)
  return newDate
}

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

interface Props {
  date: Date
  setDate: (date: Date) => void
}

export const MonthContainer: React.FC<Props> = ({ date, setDate }) => {
  const incDate = () => {
    setDate(increaseDate(date))
  }
  const decDate = () => {
    const newDate = new Date(date.toString())
    newDate.setMonth(newDate.getMonth() - 1)
    setDate(newDate)
  }

  const ifCannotChangeDecrease = () => {
    const now = new Date()
    const nextMonth = increaseDate(now)
    return (
      nextMonth.getFullYear() === date.getFullYear() &&
      nextMonth.getMonth() === date.getMonth()
    )
  }

  return (
    <fieldset className={styles.container}>
      <legend>Every month until</legend>
      <div className={styles.controller}>
        <div>
          <button
            disabled={ifCannotChangeDecrease()}
            onClick={decDate}
            className={styles.decrease}
          />
        </div>
        <div data-testid="month-caption">
          <div>
            <strong>{months[date.getMonth()]}</strong>
          </div>
          <div>{date.getFullYear()}</div>
        </div>
        <div>
          <button
            onClick={incDate}
            className={styles.increase}
            data-testid="increase-date-button"
          />
        </div>
      </div>
    </fieldset>
  )
}
