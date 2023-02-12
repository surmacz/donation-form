import React from 'react';
import { NumericFormat } from 'react-number-format';
import './amount-container.css';

interface Props {
  setAmount: (amount: number) => void
}

export const AmountContainer: React.FC<Props> = ({setAmount}) => {
  return <div className="amount-container">
    <label htmlFor="amount-input">
      I can donate
    </label>
    <div className="amount-input-container">
      <i className="currency" />
      <NumericFormat
        id="amount-input"
        placeholder="0.00"
        thousandSeparator=","
        allowNegative={false}
        decimalScale={2}
        onValueChange={({floatValue}) => setAmount(floatValue)}
        isAllowed={(values) => {
          const {floatValue} = values;
          return floatValue === undefined || floatValue < 1000000;
        }}
      />
    </div>
  </div>
}
