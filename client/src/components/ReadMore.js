import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./styles/readmore.css";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

function ReadMore(props) {
  <ScrollToTopOnMount />;
  const { state } = useLocation();

  let blog = state.items;
  console.log(blog);
  return (
    <div className="blog1">
      <div className="main_body gradient-box">
        <h1 className="header">{blog.name}</h1>
        <img alt="main_image" className="main_image" src={blog.imageURL} />
        <div
          className="body11"
          dangerouslySetInnerHTML={{ __html: blog.body }}
        />
      </div>
    </div>
  );
}

export default ReadMore;
