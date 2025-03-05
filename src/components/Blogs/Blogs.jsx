import React, { useEffect, useState } from 'react';
import Blog from './Blog/Blog';

const Blogs = ({handleAddBookmarks,handleReadingTime}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div id='blogs-container' className='md:w-full'>
            {
                blogs.map(blog => <Blog 
                    key={blog.id}
                    blog={blog}
                    handleAddBookmarks={handleAddBookmarks}
                    handleReadingTime={handleReadingTime}
                    ></Blog>)
            }
        </div>
    );
};

export default Blogs;