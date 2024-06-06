// src/components/Blog.js
import React from 'react';
import BlogPost from './BlogPost';

const Blog = () => {
    const posts = [
        { title: 'First Post', content: 'This is my first post.' },
        { title: 'Second Post', content: 'This is my second post.' }
    ];

    return (
        <div>
            {posts.map((post, index) => (
                <BlogPost key={index} title={post.title} content={post.content} />
            ))}
        </div>
    );
};

export default Blog;
