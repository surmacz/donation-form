import React from 'react';
import { months } from './month-container.tsx';
import './summary-section.css';

interface Props {
  amount: number|undefined
  date: Date
}

export const SummarySection: React.FC<Props> = ({amount, date}) => {
  const getMonthsDiff = () => {
    const now = new Date();
    return (date.getFullYear() - now.getFullYear() - 1) * 12 + date.getMonth() + 12 - now.getMonth();
  }

  return <div className="summary-section" hidden={amount === 0 || amount === undefined}>
    <div className="total">
      <div className="label">Total amount</div>
      <div className="amount">${new Intl.NumberFormat('en-US').format(getMonthsDiff() * amount)}</div>
    </div>
    <div className="notice">
      You’re will be sending <strong>${new Intl.NumberFormat('en-US').format(amount)}</strong>{' '}
      every month, until <strong>{months[date.getMonth()]} {date.getFullYear()}</strong>. Thank you!
    </div>
  </div>
}
