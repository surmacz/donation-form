import React from 'react';
import { ActionsSection } from './actions-section.tsx';
import { Header } from './header.tsx';
import { SummarySection } from './summary-section.tsx';
import { TitleSection } from './title-section.tsx';
import { AmountContainer } from './amount-container.tsx';
import { MonthContainer } from './month-container.tsx';
import './app.css';

interface Props {}

export const App: React.FC<Props> = () => {
  return <>
      <Header />
      <div className="donation-form">
        <main>
          <TitleSection />
          <div className="donation-details-section">
            <AmountContainer />
            <MonthContainer />
          </div>
          <SummarySection />
          <ActionsSection />
        </main>
      </div>
  </>
}
