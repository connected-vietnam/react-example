// @flow

import React from 'react'
import cn from 'classnames'
import Box from '../Box'

type TExperience = {
  title: string,
  from?: number,
  to?: number,
  company: string,
  description: string,
}

const ExperienceItem = ({ item, className }: {
  item: TExperience,
  className?: string,
}) => (
  <div className={cn('flex', className)}>
    <div className="w-third pa2">
      <div className="b mb2">{item.title}</div>
      <div>({item.from} - {item.to || 'now'})</div>
    </div>
    <div className="w-two-thirds pa2">
      <div className="b mb2">{item.company}</div>
      <div>{item.description}</div>
    </div>
  </div>
)

const Experiences = ({ header, items, className }: {
  header: string,
  items: Array<TExperience>,
  className?: string,
}) => (
  <Box className={className} header={header}>
    {items.map((item) => (
      <ExperienceItem className="mb2 mb3-ns" key={item.title} item={item} />
    ))}
  </Box>
)

export default Experiences
