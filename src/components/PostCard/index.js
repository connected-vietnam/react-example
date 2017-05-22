// @flow

import React from 'react'
import cn from 'classnames'

const PostCard = ({
  className,
  post,
}: {
  className?: string,
  post: {
    slug: string,
    categories: Array<{
      slug: string,
      name: string,
    }>,
    title: string,
    summary: string,
    image: string,
  }
}) => (
  <div className={cn('flex flex-wrap', className)}>
    <div className="w-100 w-50-ns flex-auto">
      <img className="w-100" alt={post.title} src={post.image} />
    </div>
    <div className="flex-auto">
      <div className="flex">
        {post.categories.map(cat => (
          <a
            className="db bg-orange pv1 ph2 mh2 white link"
            key={cat.slug}
            href={cat.slug}
          >
            {cat.name}
          </a>
        ))}
      </div>
      <h3 className="pa2 f4 mv0">{post.title}</h3>
      <div className="pa2">{post.summary}</div>
    </div>
  </div>
)

export default PostCard
