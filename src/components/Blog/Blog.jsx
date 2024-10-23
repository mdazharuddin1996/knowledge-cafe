import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";const Blog = ({ blog, handleAddToBookmarks,handleAddToReadingTime}) => {
  
// console.log(blog)

  const { author_img,reading_time
,cover_title,name,cover_photo
  } = blog;
  






  return (
    <div className='my-6 border rounded p-6'>
      <img className='w-full' src={cover_photo} alt="" />
      <div className="flex justify-between items-center">
          <div className='flex items-center gap-4'>
        <img className='w-16' src={author_img} alt="" />
        <h3 className='text-3xl font-bold'>{ name}</h3>

        </div>

        <div>

          <p className='flex items-center'>{reading_time}

            <button
          onClick={()=>handleAddToBookmarks(blog)}  className='ml-2 text-3xl'><CiBookmark
              /></button> 
            
          </p>
        </div>
      </div>
      <h2 className='text-5xl font-bold'>{cover_title}</h2>
      <div className='flex mt-2'>
        <p className='mr-2'>#beginners</p>
      <p>#programming</p>
      </div>

      <div className='mt-2'>
        <button onClick={()=>handleAddToReadingTime(blog.reading_time)} className='font-bold text-purple-600 underline text-2xl'>Mark a read</button>
      </div>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmarks: PropTypes.func,
  handleAddToReadingTime:PropTypes.func
}
export default Blog;