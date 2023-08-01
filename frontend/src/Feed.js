import React from 'react'
import "./feed.css"
import Post from './Post';
import Tweetbox from "./TweetBox.js";

function Feed() {
  return (
    <div className='feed'>
        {/*Home */}
        <div className="feed__header">
        <h2>Home</h2>
      </div>
      
      {/*Tweet box */}
      <Tweetbox/>
      {/*Post*/}
      <Post />
      {/*Post*/}
      {/*Post*/}
      {/*Post*/}
      {/*Post*/}
      {/*Post*/}
      {/*Post*/}
      {/*Post*/}
    </div>
  )
}

export default Feed
