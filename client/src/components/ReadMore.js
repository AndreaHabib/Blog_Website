import React from "react";
import { useLocation } from "react-router-dom";
import "./styles/readmore.css";

function ReadMore(props) {
  const { state } = useLocation();

  let blog = state.items;
  console.log(blog);
  return (
    <div className="blog1">
      <h1 className="header">{blog.name}</h1>
      <img alt="main_image" className="main_image" src={blog.imageURL} />
      <div className="body11" dangerouslySetInnerHTML={{ __html: blog.body }} />
    </div>
  );
}

export default ReadMore;
