import React, {useEffect, useState} from "react";
import BlogPost from "../blogPost/BlogPost";
import "./BlogList.scss";
import BlogService from "../../../services/BlogService";
import Blog from "../../../types/Blog";
import BlogForm from "../../form/BlogForm";
import ReportsService from "../../../services/ReportsService";
import MostUsedWordsHeader from "./MostUsedWordsHeader";

const BlogList = () => {

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [mostUsedWords, setMostUsedWords] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(false);
  const userId = parseInt(localStorage.getItem('userId') as string);

  useEffect(() => {
    setLoading(true);
    getAllBlogs();
  }, []);

  const getAllBlogs = () => {
    BlogService.getAll()
    .then((response) => {
      console.log(response.data)
      setBlogs([...response.data]);
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
      setLoading(false);
    });
    getMostUsedWordsByUser();
  }

  const getMostUsedWordsByUser = () => {
    ReportsService.getMostUsedWordsByUser(userId)
    .then((response) => {
      console.log(response.data);
      setMostUsedWords(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }

  if (loading) {
    return <div className="blog-list"> Loading...</div>;
  }

  return (
      <div className="blog-list">
        <MostUsedWordsHeader mostUsedWordsMap={mostUsedWords} />
        <BlogForm refreshBlogs={getAllBlogs}/>
        {blogs.length == 0
            ? <div> No blogs to display </div>
            : blogs.slice().reverse().map((blog) => (
                <div key={blog.id}>
                  <BlogPost
                      blog={blog}
                      refreshBlogs={getAllBlogs}
                  />
                </div>
            ))}
      </div>
  )
}

export default BlogList;