import React, {useState} from 'react';
import {
  Avatar,
  Button,
  Card,
  CardContent,
  TextField,
  Typography
} from '@mui/material';
import {Field, Form, Formik} from "formik";
import BlogService from "../../services/BlogService";


const BlogForm = (props: {
  refreshBlogs: () => void
}) => {
  const [content, setContent] = useState<string>('');

  const user = JSON.parse(localStorage.getItem('user') as string);
  const username = localStorage.getItem('username') as string;
  const userId = parseInt(localStorage.getItem('userId') as string);

  const handleSubmit = () => {
    if (!user && !user.username) {
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
        <Formik initialValues={{content: ''}} onSubmit={handleSubmit}>
          <Form>
            <Card className="blog-post">
              <CardContent className="blog-card">
                <div className="user-info">
                  <Avatar className="avatar">{user.username.charAt(0).toUpperCase()}</Avatar>
                  <Typography variant="h5">{user.username}</Typography>
                </div>
                <Field
                    as={TextField}
                    type="text"
                    className="form-control"
                    name="content"
                    value={content}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContent(e.target.value)}
                    inputProps={{ style: { border: 'none' }}}
                    sx={{
                      width: '100%',
                    }}
                />
                <Button type="submit" variant="contained">
                  Tweet
                </Button>
              </CardContent>
            </Card>
          </Form>
        </Formik>
      </div>
  );
};

export default BlogForm;