import { createContext, useReducer } from "react";
export const PostList=createContext();

// eslint-disable-next-line no-unused-vars
const postListReducer=(currPostList,action)=>{
    return currPostList
}

// eslint-disable-next-line react/prop-types
const PostListProvider=({children})=>{
    const addPost=()=>{}
    const deletePost=()=>{}
    // eslint-disable-next-line no-unused-vars
    const [postList,dispatchPostList]=useReducer(postListReducer,DEFAULT_POST_LIST)

    return <PostList.Provider value={{postList:postList,addPost:addPost,deletePost:deletePost}}>
        {children}
    </PostList.Provider>
};

const DEFAULT_POST_LIST=[
    {
        id:'1',
        title:'Going to Mumbai',
        body:'Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.',
        reactions:2,
        userId:'user-9',
        tags:['vacation','Mumbai','Enjoying'],
    },
    {
        id:'2',
        title:'Paas ho bhai',
        body:'4 saal ki masti k baad bhi ho gaya hain paas',
        reactions:15,
        userId:'user-12',
        tags:['Graduating','Unbelievable']
    },
];
export default PostListProvider;