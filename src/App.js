// @flow

import React from 'react';
import { withState } from 'recompose'
import cn from 'classnames'
import Dashboard from './components/Dashboard';
import Cv from './components/Cv';
import Blog from './components/Blog';

const App = ({
  selected,
  select,
}: {
  selected: number,
  select: (selected: number) => void,
}) => (
  <div>
    <div className="tc">Click to select</div>
    <div className="flex justify-center">
      <div
        className={cn('pointer pa2', { 'bg-light-gray': selected === 0 })}
        onClick={() => select(0)}
      >
        Dashboard Demo
      </div>
      <div
        className={cn('pointer pa2', { 'bg-light-gray': selected === 1 })}
        onClick={() => select(1)}
      >
        Cv Demo
      </div>
      <div
        className={cn('pointer pa2', { 'bg-light-gray': selected === 2 })}
        onClick={() => select(2)}
      >
        Blog Demo
      </div>
    </div>
    {selected === 0 && <Dashboard />}
    {selected === 1 && <Cv />}
    {selected === 2 && <Blog />}
  </div>
)

export default withState('selected', 'select', 0)(App)
