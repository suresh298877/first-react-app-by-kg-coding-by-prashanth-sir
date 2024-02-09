import { PostList } from "../store/post-list-store"
import { useRef, useContext } from "react";
const CreatePost = () => {
  const data=useContext(PostList);
  const addPost=data.addPost;
  const userIdElement=useRef();
  const postTitleElement=useRef();
  const postBodyElement=useRef();
  const reactionsElement=useRef();
  const tagsElement=useRef();

  const handleSubmit=(event)=>{
    event.preventDefault();
    addPost(
      userIdElement.current.value,
      postTitleElement.current.value,
      postBodyElement.current.value,
      reactionsElement.current.value,
      tagsElement.current.value.split(" ")
      )
      userIdElement.current.value=""
      postTitleElement.current.value=""
      postBodyElement.current.value=""
      reactionsElement.current.value=""
      tagsElement.current.value=""

  }

  return <form className="create-post" onSubmit={handleSubmit}>

    <div className="mb-3">
      <label htmlFor="userId" className="form-label">User id</label>
      <input ref={userIdElement} type="text" className="form-control" id="userId" placeholder="Enter your user id." />
    </div>

    <div className="mb-3">
      <label htmlFor="title" className="form-label">Post Title</label>
      <input ref={postTitleElement} type="text" className="form-control" id="title" placeholder="How are you feeling today" />
    </div>

    <div className="mb-3">
      <label htmlFor="body" className="form-label">Post Content</label>
      <textarea ref={postBodyElement} rows="4" type="text" className="form-control" id="body" placeholder="Tells us more about it." />
    </div>

    <div className="mb-3">
      <label htmlFor="reactions" className="form-label">Number of reactions</label>
      <input ref={reactionsElement} type="text" className="form-control" id="reactions" placeholder="How many people reacted to this post." />
    </div>

    <div className="mb-3">
      <label htmlFor="tags" className="form-label">Enter tags</label>
      <input ref={tagsElement} type="text" className="form-control" id="tags" placeholder="Enter your tags here." />
    </div>

    <button type="submit" className="btn btn-primary">Post</button>
  </form>

}
export default CreatePost;