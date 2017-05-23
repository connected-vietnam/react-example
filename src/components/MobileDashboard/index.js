// @flow

import React from 'react'
import cn from 'classnames'
import Icon from '../Icon'

const Head = ({
  className,
}: {
  className?: string,
}) => (
  <div className={cn('flex justify-between', className)}>
    <div className="flex items-center">
      <Icon name="fa-bars" className="fa-2x mr3" />
      <span className="f4">Wallet</span>
    </div>
    <div>
      <Icon name="fa-bar-chart" className="fa-2x" />
    </div>
  </div>
)

const Balance = ({
  className,
}: {
  className?: string,
}) => (
  <div className={className}>
    <div className="flex items-center">
      <div className="f1 mr2 white-90">25430</div>
      <div>USD</div>
    </div>
    <div>You Balance</div>
  </div>
)

const list = [
  {
    icon: 'fa-suitcase',
    name: 'Salary',
    time: 'Oct 27 2017',
    value: '+12000',
  },
  {
    icon: 'fa-shopping-bag',
    name: 'Shopping',
    time: 'Oct 27 2017',
    value: '+12000',
  },
  {
    icon: 'fa-spoon',
    name: 'Food',
    time: 'Oct 27 2017',
    value: '+12000',
  },
  {
    icon: 'fa-credit-card',
    name: 'Bank Transfer',
    time: 'Oct 27 2017',
    value: '+12000',
  },
]

const List = ({ items, className }: {
  items: Array<{
    icon: string,
    name: string,
    time: string,
    value: string,
  }>,
  className?: string,
}) => (
  <div className={className}>
    {items.map(item => (
      <div className="flex bb b--light-gray items-center" key={item.name}>
        <div className="pa3 flex-auto flex">
          <Icon name={item.icon} className="w2 tc fa-2x mr3 white-90" />
          <div>
            <div className="white-90 mb1">{item.name}</div>
            <div className="f7">{item.time}</div>
          </div>
        </div>
        <div className="pa3 w4 flex-none white-90 tr">
          {item.value}
        </div>
      </div>
    ))}
  </div>
)

const Tabs = ({ className }: {
  className?: string,
}) => (
  <div className={cn('flex justify-around', className)}>
    <div className="pv2 ph3">Aug</div>
    <div className="pv2 ph3">Sep</div>
    <div className="pv2 ph3 bg-white-20 br3 shadow-1">Oct</div>
    <div className="pv2 ph3">Nov</div>
    <div className="pv2 ph3">Dec</div>
  </div>
)

const Footer = ({
  className,
}: {
  className?: string,
}) => (
  <div className="flex">
    <div className="w-50 flex items-center bg-black-30">
      <div className="pa3">
        <div className="mb2">Income</div>
        <Icon name="fa-arrow-up" className="green" />
      </div>
      <div className="f3">5500</div>
    </div>
    <div className="w-50 flex items-center bg-black-50">
      <div className="pa3">
        <div className="mb2">Expense</div>
        <Icon name="fa-arrow-down" className="red" />
      </div>
      <div className="f3">5500</div>
    </div>
  </div>
)

const MobileDashboard = ({
  className,
}: {
  className?: string,
}) => (
  <div className={cn('mw6 center bg-dark-gray white-60 pa4 pt5', className)}>
    <Head className="mb4 white-90" />
    <Balance className="mb3" />
    <Tabs />
    <List className="mb3" items={list} />
    <Footer />
  </div>
)

export default MobileDashboard
