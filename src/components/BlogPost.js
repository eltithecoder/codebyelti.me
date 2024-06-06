// src/components/BlogPost.js
import React from 'react';

const BlogPost = ({ title, content }) => (
    <div>
        <h2>{title}</h2>
        <p>{content}</p>
    </div>
);

export default BlogPost;