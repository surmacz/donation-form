import React from 'react';
import { months } from './month-container.tsx';
import './summary-section.css';

interface Props {
  date: Date
}

export const SummarySection: React.FC<Props> = ({date}) => {
  return <div className="summary-section">
    <div className="total">
      <div className="label">Total amount</div>
      <div className="amount">$200,000</div>
    </div>
    <div className="notice">You’re will be sending <strong>$25,000</strong> every month, until <strong>{months[date.getMonth()]} {date.getFullYear()}</strong>. Thank you!</div>
  </div>
}
