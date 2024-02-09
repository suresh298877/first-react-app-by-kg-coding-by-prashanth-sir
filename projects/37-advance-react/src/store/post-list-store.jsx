import { createContext, useReducer } from "react";
export const PostList=createContext();

// eslint-disable-next-line no-unused-vars
const postListReducer=(currPostList,action)=>{
    console.log(action)
    let newPostList=currPostList;
    if(action.type==='DELETE_POST'){
        newPostList=currPostList.filter(post=>post.id!==action.payload.postId);
    }
    else if(action.type==='ADD_POST'){
        newPostList=[...currPostList,action.payload]
    }
    return newPostList
}

// eslint-disable-next-line react/prop-types
const PostListProvider=({children})=>{

    const addPost=(userId,postTitle,postBody,reactions,tags)=>{
        dispatchPostList({
            type:'ADD_POST',
            payload:{
                id:Date.now(),
                title:postTitle,
                body:postBody,
                reactions:reactions,
                userId:userId,
                tags:tags,
            }
        })
    }
    const deletePost=(postid)=>{
        dispatchPostList({
            type:'DELETE_POST',
            payload:{
                postId:postid
            }
        })
    }
    // eslint-disable-next-line no-unused-vars
    const [postList,dispatchPostList]=useReducer(postListReducer,[]);

    return <PostList.Provider value={{postList:postList,addPost:addPost,deletePost:deletePost}}>
        {children}
    </PostList.Provider>
};
export default PostListProvider;