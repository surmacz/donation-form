import React from 'react';
import './month-container.css';

interface Props {}

export const MonthContainer: React.FC<Props> = () => {
  return <fieldset className="month-container">
    <legend>Every month until</legend>
    <div className="month-control">
      <div>
        <button className="change-month previous" />
      </div>
      <div>
        <div className="month"><strong>August</strong></div>
        <div className="year">2023</div>
      </div>
      <div>
        <button className="change-month next" />
      </div>
    </div>
  </fieldset>
}
