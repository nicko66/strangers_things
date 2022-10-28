import React from 'react';
import PostsItem from './PostsItem';

const Posts = ({posts}) => {
  console.log("posts", Posts)
  return (
    <div>
        {posts.map((item) => {
          return <PostsItem key={item._id} posts={item} />
        })}
    </div>
  );
};

export default Posts;