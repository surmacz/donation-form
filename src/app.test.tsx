import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from './app';

afterEach(() => {
  jest.useRealTimers();
});

test('Given I visit the main page', async () => {
  // And today is January 2022
  jest.useFakeTimers({now: new Date('2022-01-01')});

  render(<App />);

  // When I enter "1000" in "I can donate" input
  const amountInput = screen.getByLabelText('I can donate');
  await fireEvent.change(amountInput, {target: {value: '1000'}});

  // And when I move months 2 times forward in "Every month until" controller
  const increaseDateButton = screen.getByTestId('month-control-increase-date-button');
  await fireEvent.click(increaseDateButton);
  await fireEvent.click(increaseDateButton);

  // Then I should see "1,000" in the input
  expect(amountInput).toHaveValue('1,000');

  // And I should see "April 2022" caption in "Every month until" controller
  const monthControlCaption = screen.getByTestId('month-control-caption');
  expect(monthControlCaption).toHaveTextContent('April');
  expect(monthControlCaption).toHaveTextContent('2022');

  // And I should see "$3,000" in "Total amount" summary caption
  expect(screen.getByTestId('summary-total-amount')).toHaveTextContent('$3,000');

  // And I should see a proper summary text
  expect(screen.getByTestId('summary-notice')).toHaveTextContent('You’re will be sending $1,000 every month, until April 2022. Thank you!');
});
