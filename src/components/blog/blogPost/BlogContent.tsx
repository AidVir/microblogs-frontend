import Blog from "../../../types/Blog";
import {Typography} from "@mui/material";
import React from "react";

const BlogContent = (props: { blog: Blog, wordCount: number }) => {
  return <>
    <Typography variant="h6" className="content">
      {props.blog.content}
    </Typography>
    <Typography variant="caption" className="date">
      {getTimeDifference(new Date(props.blog.date))}
    </Typography>
    <br/>
    <Typography variant="caption" className="word-count">
      Word count : {props.wordCount}
    </Typography>
  </>;
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

export default BlogContent