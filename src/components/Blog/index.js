// @flow

import React, { Component } from 'react';
import cn from 'classnames'
import TopNav from '../TopNav'
import PostCard from '../PostCard'
import Header from '../Header'
import { posts } from './data'

const Profile = ({
  className,
}: {
  className?: string,
}) => (
  <div className={cn(className)}>
    <div className="relative">
      <div className="bg-green h4 w4" />
    </div>
    {/* <div className="relative">
      <div className="absolute top--2">
        <div className="pa1 bg-white">Profile Card</div>
      </div>
      <div>This is the content</div>
    </div> */}
  </div>
)

const Advertisement = ({
  className,
}: {
  className?: string,
}) => (
  <div className={className}>
    Advertisement
  </div>
)

const YoutubeVideo = ({
  className,
}: {
  className?: string,
}) => (
  <div className={className}>
    YoutubeVideo
  </div>
)

const Footer = ({
  className,
}: {
  className?: string,
}) => (
  <div className="relative h2">
    <div className="absolute w-100 bb b--light-gray h1" />
    <div className="absolute w-100 h2 flex items-center">
      <span className="bg-white pa2 center">Footer</span>
    </div>
  </div>
)

class App extends Component {
  render() {
    return (
      <div>
        <TopNav items={[
          {
            name: 'Home',
            link: '/',
          },
          {
            name: 'Life style',
            link: '/life-style',
          },
          {
            name: 'Nature',
            link: '/nature',
          },
          {
            name: 'Sports',
            link: '/sports',
          },
          {
            name: 'Sciences & Technologies',
            link: '/sciences-technologies',
          },
        ]} />
        <Header
          className="mw8 center tc pv5"
        />
        <div className="mw8 center flex flex-wrap">
          <div className="w-100 w-75-l pa2">
            {posts.map(post => (
              <PostCard className="pa2 pa3-ns mb2 mb3-ns ba b--light-gray" key={post.slug} post={post} />
            ))}
          </div>
          <div className="w-100 w-25-l pa2">
            <Profile className="pa2 pa3-ns mb2 mb3-ns ba b--light-gray" />
            <Advertisement className="pa2 pa3-ns mb2 mb3-ns ba b--light-gray" />
            <YoutubeVideo className="pa2 pa3-ns mb2 mb3-ns ba b--light-gray" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
