import React from 'react';
import './amount-container.css';

interface Props {}

export const AmountContainer: React.FC<Props> = () => {
  return <div className="amount-container">
    <label for="amount-input">
      I can donate
    </label>
    <div className="amount-input-container">
      <i className="currency" />
      <input id="amount-input" type="text" />
    </div>
  </div>
}
