// @flow

import React from 'react'
import cn from 'classnames'
import About from '../About'
import Skills from '../Skills'
import Experiences from '../Experiences'
import Interests from '../Interests'
import Box from '../Box'

const info = {
  name: 'Nguyen Van A',
  phone: '0985.822.844',
  birthday: '19-02-1998',
  email: 'abc@gmail.com',
  website: 'www.yourwebsite.com',
  address: '123 Tran Hung Dao, HCMC, Vietnam',
  relationship: 'Single',
  nationality: 'Vietnam',
}

const skills = [
  {
    name: 'Html',
    rating: 9,
  },
  {
    name: 'CSS',
    rating: 7,
  },
  {
    name: 'React.Js',
    rating: 9,
  },
  {
    name: 'Photoshop',
    rating: 5,
  },
  {
    name: 'Nde.Js',
    rating: 9,
  },
]

const languages = [
  {
    name: 'English',
    rating: 7,
  },
  {
    name: 'Vietnamese',
    rating: 9,
  },
  {
    name: 'Japanese',
    rating: 6,
  },
]

const workExperiences = [
  {
    title: 'Stupid Developer',
    from: 2010,
    to: 2013,
    company: 'Smart Company',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Medium Developer',
    from: 2014,
    to: 2015,
    company: 'Big Company',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Smart Developer',
    from: 2015,
    company: 'Small Company',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
]

const educations = [
  {
    title: 'Barchalor of Computer Sciences',
    from: 2010,
    to: 2013,
    company: 'University Of Natural Sciences',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Master of Computer Sciences',
    from: 2014,
    to: 2015,
    company: 'University Of Natural Sciences',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
]

const interests = [
  {
    icon: 'fa-music',
    name: 'Music',
  },
  {
    icon: 'fa-code',
    name: 'Coding',
  },
  {
    icon: 'fa-paint-brush',
    name: 'Design',
  },
  {
    icon: 'fa-futbol-o',
    name: 'Football',
  },
  {
    icon: 'fa-camera-retro',
    name: 'Photography',
  },
]

const reference = {
  name: 'King Kai',
  company: 'Planet Earth',
  phone: '0901.222.333',
  email: 'hi@kingkai.com',
}

const Cv = () => (
  <div className="mw8 center">
    <div className="bg-dark-gray flex flex-column pa3 pa4-l">
      <div className="f3 f2-l ba bw2 b--gold center ph3 pv2 white-80 ttu tc">Your Name</div>
      <div className="white-60 tc ma2">Web Designer / Developer</div>
      <div className="white-60 tc ma2 flex flex-wrap">
        {[info.phone, info.email, info.website, info.address].map((item, idx) => (
          <div key={item} className={cn('ph3 pv1 w-100 w-auto-l', { 'br-l b--light-gray-l': idx < 3 })}>{item}</div>
        ))}
      </div>
    </div>
    <div className="flex flex-wrap">
      <div className="w-100 w-40-l pa2 pa3-l">
        <About className="mb3 mb4-l" info={info} />
        <Skills className="mb3 mb4-l" header="Skills" skills={skills} />
        <Skills className="mb3 mb4-l" header="Languages" skills={languages} />
        <Box className="mb3 mb4-l" header="References">
          <div className="b pa1">{reference.name}</div>
          <div className="pa1">{reference.company}</div>
          <div className="pa1">{reference.phone}</div>
          <div className="pa1">{reference.email}</div>
        </Box>
      </div>
      <div className="w-100 w-60-l pa2 pa3-l">
        <Experiences header="Working Experiences" items={workExperiences} />
        <Experiences header="Educations" items={educations} />
        <Interests header="Interests" items={interests} />
      </div>
    </div>
  </div>
)

export default Cv
