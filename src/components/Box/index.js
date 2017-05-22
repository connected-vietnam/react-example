// @flow

import React from 'react'
import cn from 'classnames'
import { withState } from 'recompose'
import Icon from '../Icon'

const Box = ({ header, children, className, show, isShow }: {
  header: string,
  children?: any,
  className?: string,
  isShow: boolean,
  show: (isShow: boolean) => void,
}) => (
  <div className={cn('', className)}>
    <div
      className="gold bb b--gold bw1 pa2 mb2 flex justify-between items-center pointer"
      onClick={() => show(!isShow)}
    >
      <span className="f3 gold">{header}</span>
      <Icon name={isShow ? 'fa-plus': 'fa-minus'} className="pointer" />
    </div>
    {isShow && (
      <div className="animated fadeIn">{children}</div>
    )}
  </div>
)

Box.defaultProps = {
  className: undefined,
  children: null,
}

export default withState('isShow', 'show', true)(Box)
