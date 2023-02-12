import React, {useState} from 'react';
import { ActionsSection } from './actions-section';
import { Header } from './header';
import { SummarySection } from './summary-section';
import { TitleSection } from './title-section';
import { AmountContainer } from './amount-container';
import { MonthContainer, increaseDate } from './month-container';
import './app.css';

interface Props {}

export const App: React.FC<Props> = () => {
  const [amount, setAmount] = useState<number|undefined>(0);
  const [date, setDate] = useState<Date>(increaseDate(new Date()));

  return <>
      <Header />
      <div className="donation-form">
        <main>
          <TitleSection />
          <div className="donation-details-section">
            <AmountContainer setAmount={setAmount} />
            <MonthContainer date={date} setDate={setDate} />
          </div>
          <SummarySection amount={amount} date={date} />
          <ActionsSection />
        </main>
      </div>
  </>
}
