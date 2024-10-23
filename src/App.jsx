
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToReadingTime = (time) => {
    // console.log(time)
    const newReadingTime = parseFloat(readingTime) + parseFloat(time);
;
    setReadingTime(newReadingTime)
  }

  const handleAddToBookmarks = (blog) => {
    const newBookMarks = [...bookmarks, blog];
    setBookmarks(newBookMarks);
  };


  return (
    <>
      <div>
        <Header></Header>
        <main className='md:flex w-9/12 mx-auto justify-between'>
          <Blogs handleAddToBookmarks={handleAddToBookmarks}
          handleAddToReadingTime={handleAddToReadingTime}
          
          ></Blogs>
          <Bookmarks bookmarks={bookmarks}
            readingTime={readingTime}
            ></Bookmarks>
      </main>
      </div>
    </>
  )
}

export default App
