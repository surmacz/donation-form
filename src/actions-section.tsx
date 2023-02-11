import React from 'react';
import './actions-section.css';

interface Props {}

export const ActionsSection: React.FC<Props> = () => {
  return <div className="actions-section">
    <button className="cancel">Cancel</button>
    <button className="cancel-mini">x</button>
    <button className="continue">Continue</button>
  </div>
}
