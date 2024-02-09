import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { PostList } from "../store/post-list-store";
/* eslint-disable react/prop-types */
const Post = ({ post }) => {
  const data = useContext(PostList);
  const deletePost = data.deletePost;
  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
            <span
              onClick={() => {
                deletePost(post.id);
              }}
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            >
              {/* {post.reactions} */}
              <a href="#" style={{color: "white"}}><MdDelete /></a>
            </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag, idx) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            {tag}
          </span>
        ))}
        <div className="reactions alert alert-success" role="alert">
          This is post has been responded by {post.reactions} People.
        </div>
      </div>
    </div>
  );
};
export default Post;
