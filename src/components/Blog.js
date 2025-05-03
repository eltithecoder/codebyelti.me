// src/components/Blog.js
import React from 'react';
import BlogPost from './BlogPost';

const Blog = () => {
    const posts = [
        { title: 'First Post', description: 'This is my first post.' },
        { title: 'Second Post', description: 'This is my second post.' }
    ];

    return (
        <div>
            {posts.map((post, index) => (
                <BlogPost key={index} title={post.title} description={post.description} />
            ))}
        </div>
    );
};

export default Blog;
