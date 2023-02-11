import React from 'react';
import './summary-section.css';

interface Props {}

export const SummarySection: React.FC<Props> = () => {
  return <div className="summary-section">
    <div className="total">
      <div className="label">Total amount</div>
      <div className="amount">$200,000</div>
    </div>
    <div className="notice">You’re will be sending <strong>$25,000</strong> every month, until <strong>August 2023</strong>. Thank you!</div>
  </div>
}
