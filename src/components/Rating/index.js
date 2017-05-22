// @flow

import React from 'react'
import cn from 'classnames'
import Icon from '../Icon'

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const Rating = ({ value, itemClassName, enableClassName, disableClassName }: {
  value: number,
  itemClassName?: string,
  enableClassName: string,
  disableClassName: string,
}) => (
  <div>
    {values.map(x => (
      <Icon
        key={x}
        name="fa-star"
        className={cn('db f4', itemClassName, {
          [enableClassName]: x <= value,
          [disableClassName]: x > value,
        })}
      />
    ))}
  </div>
)

export default Rating
