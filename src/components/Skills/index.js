// @flow

import React from 'react'
import Box from '../Box'
import Rating from '../Rating'

type TSkill = {
  name: string,
  rating: number,
}

const Skills = ({ header, skills, className }: {
  header: string,
  skills: Array<TSkill>,
  className?: string,
}) => (
  <Box className={className} header={header}>
    {skills.map(({ name, rating }) => (
      <div key={name} className="flex pa1">
        <div className="w4">{name}</div>
        <Rating value={rating} enableClassName="gold" disableClassName="light-gray" />
      </div>
    ))}
  </Box>
)

export default Skills
