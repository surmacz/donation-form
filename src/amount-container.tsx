import React from 'react';
import { NumericFormat } from 'react-number-format';
import styles from './amount-container.module.css';

interface Props {
  setAmount: (amount: number | undefined) => void
}

export const AmountContainer: React.FC<Props> = ({setAmount}) => {
  return <div className={styles.container}>
    <label>
      I can donate
    <NumericFormat
      placeholder="0.00"
      thousandSeparator=","
      allowNegative={false}
      decimalScale={2}
      inputMode='decimal'
      onValueChange={({floatValue}) => setAmount(floatValue)}
      isAllowed={(values) => {
        const {floatValue} = values;
        return floatValue === undefined || floatValue < 1000000;
      }}
    />
    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.0252 18V15.85C3.14186 15.65 2.37953 15.2667 1.7382 14.7C1.0962 14.1333 0.625195 13.3333 0.325195 12.3L2.1752 11.55C2.4252 12.35 2.7962 12.9583 3.2882 13.375C3.77953 13.7917 4.4252 14 5.2252 14C5.90853 14 6.48786 13.846 6.9632 13.538C7.43786 13.2293 7.6752 12.75 7.6752 12.1C7.6752 11.5167 7.49186 11.054 7.1252 10.712C6.75853 10.3707 5.90853 9.98333 4.5752 9.55C3.14186 9.1 2.15853 8.56267 1.6252 7.938C1.09186 7.31267 0.825195 6.55 0.825195 5.65C0.825195 4.56667 1.1752 3.725 1.8752 3.125C2.5752 2.525 3.29186 2.18333 4.0252 2.1V0H6.0252V2.1C6.85853 2.23333 7.5462 2.53733 8.0882 3.012C8.62953 3.48733 9.0252 4.06667 9.2752 4.75L7.4252 5.55C7.2252 5.01667 6.94186 4.61667 6.5752 4.35C6.20853 4.08333 5.70853 3.95 5.0752 3.95C4.34186 3.95 3.78353 4.11267 3.4002 4.438C3.01686 4.76267 2.8252 5.16667 2.8252 5.65C2.8252 6.2 3.0752 6.63333 3.5752 6.95C4.0752 7.26667 4.94186 7.6 6.1752 7.95C7.3252 8.28333 8.1962 8.81233 8.7882 9.537C9.37953 10.2623 9.67519 11.1 9.67519 12.05C9.67519 13.2333 9.3252 14.1333 8.6252 14.75C7.9252 15.3667 7.05853 15.75 6.0252 15.9V18H4.0252Z" fill="#4D6475"/>
    </svg>
    </label>
  </div>
}
