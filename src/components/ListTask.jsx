import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const ListTask = (props) => {
  return (
    <div>
      {props.posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default connect(mapStateToProps)(ListTask);
