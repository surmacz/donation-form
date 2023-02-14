import React from 'react';
import './month-container.css';

export const increaseDate = (date: Date) => {
  const newDate = new Date(date.toString());
  newDate.setMonth(newDate.getMonth() + 1);
  return newDate;
}

export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

interface Props {
  date: Date,
  setDate: (date: Date) => void
}

export const MonthContainer: React.FC<Props> = ({date, setDate}) => {
  const incDate = () => {
    setDate(increaseDate(date));
  }
  const decDate = () => {
    const newDate = new Date(date.toString());
    newDate.setMonth(newDate.getMonth() - 1);
    setDate(newDate);
  }

  const ifCannotChangePrevious = () => {
    const now = new Date();
    const nextMonth = increaseDate(now);
    return nextMonth.getFullYear() === date.getFullYear() && nextMonth.getMonth() === date.getMonth();
  }

  return <fieldset className="month-container">
    <legend>Every month until</legend>
    <div className="month-control">
      <div>
        <button disabled={ifCannotChangePrevious()} onClick={decDate} className="change-month previous" />
      </div>
      <div data-testid="month-control-caption">
        <div className="month"><strong>{months[date.getMonth()]}</strong></div>
        <div className="year">{date.getFullYear()}</div>
      </div>
      <div>
        <button onClick={incDate} className="change-month next" data-testid="month-control-increase-date-button" />
      </div>
    </div>
  </fieldset>
}
