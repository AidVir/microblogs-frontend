import React, {useState} from 'react';
import {
  Avatar,
  Card,
  CardContent,
  Typography
} from '@mui/material';
import BlogService from "../../services/BlogService";
import "./BlogForm.scss";
import BlogFormField from "./BlogFormField";

const BlogForm = (props: {
  refreshBlogs: () => void
}) => {
  const [content, setContent] = useState<string>('');

  const username = localStorage.getItem('username') as string;
  const userId = parseInt(localStorage.getItem('userId') as string);

  const handleSubmit = () => {
    if (!username) {
      console.log("User not logged in");
      return;
    }

    if (content.trim() !== '') {
      BlogService.create({
        content: content,
        username: username,
      }, userId).then(() => {
        setContent('');
        props.refreshBlogs();
      });
    }
  };

  return (
      <div>
        <Card className="blog-post">
          <CardContent className="blog-card">
            <div className="user-info">
              <Avatar className="avatar">{username.charAt(0).toUpperCase()}</Avatar>
              <Typography variant="h5">{username}</Typography>
            </div>
            <BlogFormField value={content} setContent={setContent} onSubmit={handleSubmit}/>
          </CardContent>
        </Card>
      </div>
  );
};

export default BlogForm;