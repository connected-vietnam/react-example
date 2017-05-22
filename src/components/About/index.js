// @flow

import React from 'react'
import Box from '../Box'

type Info = {
  name: string,
  phone: string,
  birthday: string,
  email: string,
  website: string,
  address: string,
  relationship: string,
  nationality: string,
}

const About = ({ info, className }: {
  info: Info,
  className?: string,
}) => (
  <Box className={className} header="About me">
    <div className="flex pa1">
      <div className="w4">Name</div>
      <div className="">{info.name}</div>
    </div>
    <div className="flex pa1">
      <div className="w4">Birthday</div>
      <div className="">{info.birthday}</div>
    </div>
    <div className="flex pa1">
      <div className="w4">Relationship</div>
      <div className="">{info.relationship}</div>
    </div>
    <div className="flex pa1">
      <div className="w4">Nationality</div>
      <div className="">{info.nationality}</div>
    </div>
  </Box>
)

export default About
