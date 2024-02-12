import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  // const { postList, fetching } = useContext(PostListData);
  const postList=useLoaderData();
  // console.log(postList)

  return (
    <>
      {/* {fetching && <LoadingSpinner />} */}
      {postList && postList.length === 0 && <WelcomeMessage />}
      {/* {!fetching && postList.length === 0 && <WelcomeMessage />} */}
      {postList && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export const postLoader= async ()=>{
  return fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => { 
        return data.posts;
      });
};

export default PostList;
