import React from "react";
import {Avatar, Card, CardContent, Typography} from "@mui/material";
import "./BlogPost.scss";
import Blog from "../../../types/Blog";

const BlogPost = (props: {blog: Blog}) => {

  return (
      <Card className="blog-post">
        <CardContent className="blog-card">
          <div className="user-info">
            <Avatar className="avatar">{props.blog.username.charAt(0).toUpperCase()}</Avatar>
            <Typography variant="h5">{props.blog.username}</Typography>
          </div>
          <Typography variant="h6" className="content">
            {props.blog.content}
          </Typography>
          <Typography variant="caption" className="date">
            {getTimeDifference(new Date(props.blog.date))}
          </Typography>
        </CardContent>
      </Card>
  )
}

function getTimeDifference(date: Date): string {
  const currentTime: Date = new Date();
  const timeDifference: number = currentTime.getTime() - date.getTime();
  const secondsDifference: number = Math.floor(timeDifference / 1000);

  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  let formattedTimeDifference: string;

  if (secondsDifference < 60) {
    formattedTimeDifference = rtf.format(-secondsDifference, "second");
  } else if (secondsDifference < 3600) {
    const minutesDifference = Math.floor(secondsDifference / 60);
    formattedTimeDifference = rtf.format(-minutesDifference, "minute");
  } else if (secondsDifference < 86400) {
    const hoursDifference = Math.floor(secondsDifference / 3600);
    formattedTimeDifference = rtf.format(-hoursDifference, "hour");
  } else {
    const daysDifference = Math.floor(secondsDifference / 86400);
    formattedTimeDifference = rtf.format(-daysDifference, "day");
  }

  return formattedTimeDifference;
}

export default BlogPost;