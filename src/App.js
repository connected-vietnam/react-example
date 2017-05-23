// @flow

import React from 'react';
import { withState } from 'recompose'
import cn from 'classnames'
import MobileDashboard from './components/MobileDashboard';
import Dashboard from './components/Dashboard';
import Cv from './components/Cv';
import Blog from './components/Blog';

const items = [
  {
    name: 'Mobile Dashboard',
    Component: MobileDashboard,
  },
  {
    name: 'Dashboard',
    Component: Dashboard,
  },
  {
    name: 'Cv',
    Component: Cv,
  },
  {
    name: 'Blog',
    Component: Blog,
  },
]

const App = ({
  selected,
  select,
}: {
  selected: number,
  select: (selected: number) => void,
}) => {
  const Component = items[selected].Component
  return (
    <div>
      <div className="tc">Click to select</div>
      <div className="flex justify-center">
        {items.map(({ name }, idx) => (
          <div
            className={cn('pointer pa2', { 'bg-light-gray': selected === idx })}
            onClick={() => select(idx)}
          >
            {name}
          </div>
        ))}
      </div>
      <Component />
    </div>
  )
}

export default withState('selected', 'select', 0)(App)
