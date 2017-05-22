// @flow

import React from 'react'

const TopNav = ({
  className,
  items = [],
}: {
  className?: string,
  items: Array<{
    name: string,
    link?: string,
  }>,
}) => (
  <nav className="bg-black-80 pa2 pa3-ns">
    {items.map(item => (
      <a
        className="link pa2 pa3-ns mh2 white ttu f7"
        href={item.link}
        key={item.link}
      >
        {item.name}
      </a>
    ))}
  </nav>
)

export default TopNav
