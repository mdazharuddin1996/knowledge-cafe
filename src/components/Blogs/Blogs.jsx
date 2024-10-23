import { useEffect } from "react";
import { useState } from "react";
import '../Blog/Blog'
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({handleAddToBookmarks,handleAddToReadingTime}) => {

    const [blogs, setBlogs] = useState([]);
    
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);




    return (
        <div className="w-2/3">
            <h1>Blogs:{blogs.length}</h1>
            {blogs.map(blog => <Blog key={blog.id}
                blog={blog}
                handleAddToBookmarks={handleAddToBookmarks}
                handleAddToReadingTime={handleAddToReadingTime}
            ></Blog>)}
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmarks: PropTypes.func,
    handleAddToReadingTime:PropTypes.func
}

export default Blogs;