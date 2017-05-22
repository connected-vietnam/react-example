// @flow

import React from 'react'
import Icon from '../Icon'
import Box from '../Box'

type TInterest = {
  name: string,
  icon: string,
}

const Interests = ({ header, items, className }: {
  header: string,
  items: Array<TInterest>,
  className?: string,
}) => (
  <Box header={header} >
    <div className="flex items-center justify-around">
      {items.map(item => (
        <div key={item.name} className="center tc">
          <Icon name={item.icon} className="fa-2x db mv2" />
          <div>{item.name}</div>
        </div>
      ))}
    </div>
  </Box>
)

export default Interests
