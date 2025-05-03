// src/components/BlogPost.js
import React from 'react';

const BlogPost = ({ title, content: description }) => (
    <div>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
);

export default BlogPost;