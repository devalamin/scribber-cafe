import React from 'react';
import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog }) => {
    console.log(blog);
    const { hashtags, cover, read_time, published_date, author_img, author_name, title } = blog;
    return (
        <div className='shadow-md my-4 rounded-md'>
            <div className='p-3'>
                <div>
                    <img src={cover} alt="" />
                </div>
                <div className='my-4 flex justify-between items-center'>
                    <div className='flex space-x-2 items-center'>
                        <img src={author_img} alt="" />
                        <div>
                            <h4 className='font-bold'>{author_name}</h4>
                            <p>{published_date}</p>
                        </div>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <p>{read_time} min read</p>
                        <button><CiBookmark></CiBookmark></button>
                    </div>
                </div>
                <h4 className='font-bold text-2xl my-4'>{title}</h4>
                <p className='space-x-2'>
                    {hashtags.map((hash, idx) => <span key={idx}> <a href="">{hash}</a></span>)}
                </p>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;