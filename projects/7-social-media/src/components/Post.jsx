import { MdDelete } from "react-icons/md";
/* eslint-disable react/prop-types */
const Post = ({ post }) => {
  return (
    <div className="card post-card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {/* {post.reactions} */}
            <MdDelete />
            <span className="visually-hidden">unread messages</span>
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag, idx) => (
          <span key={idx} className="badge text-bg-primary hashtag">
            {tag}
          </span>
        ))}
        <div className="reactions alert alert-success" role="alert">
  A simple success alert—check it out!
</div>
      </div>
    </div>
  );
};
export default Post;
