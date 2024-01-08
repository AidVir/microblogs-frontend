import React, {useEffect, useState} from "react";
import {Avatar, Card, CardContent, IconButton, Typography} from "@mui/material";
import "./BlogPost.scss";
import Blog from "../../../types/Blog";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import BlogService from "../../../services/BlogService";
import ReportsService from "../../../services/ReportsService";
import BlogContent from "./BlogContent";
import BlogFormField from "../../form/BlogFormField";

const BlogPost = (props: {blog: Blog, refreshBlogs: () => void}) => {

  const [wordCount, setWordCount] = useState<number>(0);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [editContent, setEditContent] = useState<string>(props.blog.content);

  const handleDelete = () => {
    BlogService.remove(props.blog.id)
    .then((response) => {
      console.log(response.data);
      props.refreshBlogs();
    }).catch((error) => {
      console.log(error);
    });
  }

  const handleEdit = () => {
    console.log(isEditMode);
    setIsEditMode(!isEditMode);
    setEditContent(props.blog.content);
  }

  const handleSubmit = () => {

    if (editContent.trim() !== '') {
      BlogService.update(props.blog.id,{
        id: props.blog.id,
        content: editContent,
        username: username,
        date: props.blog.date
      }).then(() => {
        setIsEditMode(false);
        props.refreshBlogs();
      });
    }
  };

  useEffect(() => {
    ReportsService.getBlogWordCount(props.blog.id)
    .then((response) => {
      setWordCount(response.data);
    }).catch((error) => {
      console.log(error);
    })
  }, []);

  const username = localStorage.getItem('username') as string;
  const isCurrentUserBlog = props.blog.username === username;

  return (
      <Card className="blog-post">
        <CardContent className="blog-card">
          <div className="user-info">
            <Avatar className="avatar">{props.blog.username.charAt(0).toUpperCase()}</Avatar>
            <Typography variant="h5">{props.blog.username}</Typography>
            <IconButton className="edit-button">
              {isCurrentUserBlog ? <EditIcon onClick={handleEdit}/> : <></>}
            </IconButton>
            <IconButton className="delete-button">
              {isCurrentUserBlog ? <DeleteIcon onClick={handleDelete}/> : <></>}
            </IconButton>
          </div>
          {isEditMode ?
              <BlogFormField value={editContent} setContent={setEditContent} onSubmit={handleSubmit}/>
              : <BlogContent blog={props.blog} wordCount={wordCount}/>}
        </CardContent>
      </Card>
  )
}

export default BlogPost;