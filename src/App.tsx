import React from 'react';

interface Props {
  foo: string
}

export const App: React.FC<Props> = ({foo}) => {
  return <h3>{foo}</h3>
}
