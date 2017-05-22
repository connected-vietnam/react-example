// @flow

import React from 'react'
import cn from 'classnames'
import { withState } from 'recompose'
import Icon from '../Icon'

const items = [
  {
    icon: 'fa-desktop',
    name: 'Dashboard',
  },
  {
    icon: 'fa-check',
    name: 'Timetable',
  },
  {
    icon: 'fa-book',
    name: 'Transcript',
  },
  {
    icon: 'fa-laptop',
    name: 'Online Applying',
  },
]

const _Menu = ({ className, hovered, hover }: {
  className?: string,
  hovered: number,
  hover: (hovered: number) => void,
}) => (
  <div className={className}>
    {items.map((item, idx) => (
      <div
        key={item.name}
        onMouseOver={() => hover(idx)}
        onMouseLeave={() => hover(-1)}
        className={cn('flex items-center pa2 mv2', { 'br4 bg-white-20 pointer': hovered === idx })}
      >
        <Icon className="pa1" name={item.icon} />
        <span className="ml2">{item.name}</span>
      </div>
    ))}
  </div>
)

const Menu = withState('hovered', 'hover', -1)(_Menu)

const Box = ({ title, subtitle, menu, className, titleClassName, bodyClassName, children }: {
  title: string,
  subtitle?: string,
  menu?: string,
  className?: string,
  titleClassName?: string,
  bodyClassName?: string,
  children?: any,
}) => (
  <div className={className}>
    <div className={cn('flex justify-between', titleClassName)}>
      <div>
        <div className="white-80 mb1 f5 b">{title}</div>
        <div className="white-50 f6">{subtitle}</div>
      </div>
      <div>
        <div className="yellow f6">{menu}</div>
      </div>
    </div>
    <div className={bodyClassName}>
      {children}
    </div>
  </div>
)

const Nav = ({ className }: {
  className?: string,
}) => (
  <div className={className}>
    <div className="pl3">
      <Icon name="fa-envelope-o" />
    </div>
    <div className="pl3">
      <Icon name="fa-bell-o" />
    </div>
    <div className="pl3">
      <Icon name="fa-user" className="mr2" />
      johnsmith123
    </div>
  </div>
)

type TClass = {
  slot: string,
  time: string,
  title: string,
  lecture: string,
  hall: string,
  status: string,
  color: string,
}

const classes = [
  {
    slot: 'Slot 1',
    time: '7:00',
    title: 'DB1002 - Introduction to Database',
    lecture: 'Nguyen Trong Tai',
    hall: '105',
    status: 'Absent',
    color: 'light-red',
  },
  {
    slot: 'Slot 2',
    time: '7:00',
    title: 'DB1002 - Introduction to Database',
    lecture: 'Nguyen Trong Tai',
    hall: '105',
    status: 'Present',
    color: 'light-green',
  },
  {
    slot: 'Slot 3',
    time: '7:00',
    title: 'DB1002 - Introduction to Database',
    lecture: 'Nguyen Trong Tai',
    hall: '105',
    status: 'Not Yet',
    color: 'white-80'
  },
]

const Classes = ({ items }: {
  items: Array<TClass>
}) => (
  <div>
    {items.map((item, idx) => (
      <div
        key={item.slot}
        className={cn('flex justify-between f7 white-80 ph3 pv2 mv2', { 'bb b--light-gray': idx < items.length - 1 })}
      >
        <div className="b flex flex-column justify-center">
          <div>{item.slot}</div>
          <div>{item.time}</div>
        </div>
        <div>
          <div className="b f6 mb1">{item.title}</div>
          <div className="white-50">Lecture: {item.lecture}</div>
          <div className="white-50">Hall: {item.hall}</div>
        </div>
        <div className={cn('flex', item.color)}>
          <span className="mr2">{item.status}</span>
          <Icon name="fa-circle" />
        </div>
      </div>
    ))}
  </div>
)

type TNote = {
  title: string,
  date: string,
  user: string,
}

const notes = [
  {
    title: 'Thông báo các lớp AX112, AX333, BX331 đi học vào ngày thứ 3',
    date: '2017-06-05 09:32',
    user: 'david001',
  },
  {
    title: 'Thông báo các lớp AX132, AX333, BX331 đi học vào ngày thứ 3',
    date: '2017-06-05 79:32',
    user: 'david001',
  },
  {
    title: 'Thông báo các lớp AX1d2, AX333, BX331 đi học vào ngày thứ 3',
    date: '2017-06-07 09:32',
    user: 'louse1',
  },
]

const Notes = ({ items, className }: {
  items: Array<TNote>,
  className?: string,
}) => (
  <div>
    {items.map((item, idx) => (
      <div className={cn('pv2', { 'bb b--light-gray': idx < items.length - 1 })}>
        <div className="white-80 f6 mb1">
          {item.title}
        </div>
        <div className="flex items-center justify-between white-50 f7">
          <div>{item.date}</div>
          <div>{item.user}</div>
        </div>
      </div>
    ))}
  </div>
)

const Dashboard = () => (
  <div className="w-90 center bg-pc pa4 ma3 br4 flex justify-between">
    <div className="w-20">
      <div className="w-100 tc mb4">
        <Icon name="fa-futbol-o" className="br-100 fa-3x ba b--light-gray" />
      </div>
      <Menu className="white-80" />
    </div>
    <div className="w-70">
      <Nav className="flex justify-end ph3 pv2 white-80" />
      <div className="w-100 flex">
        <div className="w-50 pa3">
          <Box
            className="w-100 bg-white-20 br2"
            title="Today's Update"
            titleClassName="pa3"
            subtitle="20/05/2017"
            menu="Timetable">
            <Classes items={classes} />
          </Box>
        </div>
        <div className="w-50 pa3">
          <Box
            className="w-100 pa3 bg-white-20 br2"
            title="Study Progress"
            subtitle="20/05/2017"
            menu="Timetable">
          </Box>
        </div>
      </div>
      <h3 className="ph3 white-80">News & Announcement</h3>
      <div className="w-100 flex">
        <div className="w-third pa3">
          <Box
            className="w-100 bg-white-20 br2 pa3"
            title="Today's Update"
          >
            <Notes items={notes} />
          </Box>
        </div>
        <div className="w-third pa3">
          <Box
            className="w-100 bg-white-20 br2 pa3"
            title="Activities News"
          >
            <Notes items={notes} />
          </Box>
        </div>
        <div className="w-third pa3">
          <Box
            className="w-100 bg-white-20 br2 pa3"
            title="Procedures"
          >
            <Notes items={notes} />
          </Box>
        </div>
      </div>
    </div>
  </div>
)

export default Dashboard
