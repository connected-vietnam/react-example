// @flow

import React from 'react'
import cn from 'classnames'

const Icon = ({ name, className, ...props }: {
  name: string,
  className?: string,
}) => (
  <i className={cn('fa', name, className )} aria-hidden="true" {...props}></i>
)

Icon.defaultProps = {
  className: undefined,
}

export default Icon
