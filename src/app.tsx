import React, {useState} from 'react';
import { ActionsSection } from './actions-section.tsx';
import { Header } from './header.tsx';
import { SummarySection } from './summary-section.tsx';
import { TitleSection } from './title-section.tsx';
import { AmountContainer } from './amount-container.tsx';
import { MonthContainer, increaseDate } from './month-container.tsx';
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
