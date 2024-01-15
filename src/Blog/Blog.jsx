import React from 'react';
import HeaderBanner from '../components/HeaderBanner';
const Blog = () => {
    return (
        <div>
            <HeaderBanner title='Our Blog Title  '
            page='Page'
            text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!'
            active='Blog'
            currentPage='blog'
            />
        </div>
    );
};

export default Blog;