import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks,readingTime}) => {

    // console.log(bookmarks);
    

    return (
        <div className="md:w-1/3 bg-red-100 p-4 border rounded">
            <div className=" bg-purple-200 rounded mb-4 p-4">
                 <h2 className="text-purple-800 text-3xl font-bold">Spent time on read: {readingTime} mins</h2> 
           </div>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}
                readingTime={readingTime}
                ></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;