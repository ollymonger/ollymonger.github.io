import React, { useEffect, useRef, useState } from "react";

import { Box, Button, Card, CardHeader, Grid, Typography } from "@mui/material";

import { BlogPost, BlogPostProps } from "../BlogPost/BlogPost";

type BlogPostContainerProps = {
  blogPosts: BlogPostProps[];
};


export function BlogPostContainer({ blogPosts }: BlogPostContainerProps) {
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  function getCurrentItems() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const items = blogPosts.slice(startIndex, endIndex);
    const padding = Math.max(5 - items.length, 0);
    return items.concat(new Array(padding).fill(null));
  }

  const containerRef = useRef(null);

  return (
    <Grid container direction="row" spacing={5} ref={containerRef}>
      {blogPosts.map((blogPost) => (
          <Grid item xs={6} style={{ display: "flex", justifyContent: "center" }} key={blogPost.id}>
            <BlogPost id={blogPost.id} title={blogPost.title} body={blogPost.body} />
          
          </Grid>
      ))}
    </Grid>
  );
};
