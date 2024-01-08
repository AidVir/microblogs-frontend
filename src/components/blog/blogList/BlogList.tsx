import React, {useEffect, useState} from "react";
import BlogPost from "../blogPost/BlogPost";
import "./BlogList.scss";
import BlogService from "../../../services/BlogService";
import Blog from "../../../types/Blog";
import BlogForm from "../../form/BlogForm";

const BlogList = () => {

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    refreshBlogs();
  }, []);

  const refreshBlogs = () => {
    BlogService.getAll()
    .then((response) => {
      console.log(response.data)
      setBlogs([...response.data]);
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
      setLoading(false);
    });
  }

  if (loading) {
    return <div className="blog-list"> Loading...</div>;
  }

  return (
      <div className="blog-list">
        <BlogForm refreshBlogs={refreshBlogs}/>
        {blogs.length == 0 ? <div> No blogs to display </div> :
            blogs.slice().reverse().map((blog) => (
                <div key={blog.id}>
                  <BlogPost blog={blog}/>
                </div>
            ))}
      </div>
  )
}

export default BlogList;