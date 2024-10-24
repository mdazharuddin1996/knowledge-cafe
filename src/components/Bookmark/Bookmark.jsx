
import PropTypes from "prop-types";


const Bookmark = ({ bookmark }) => {
    
    const { cover_title
 } = bookmark;
    return (
        <div className="bg-slate-500 mb-2 rounded text-white p-4">
            <h2>{ cover_title
}</h2>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark:PropTypes.object
}
export default Bookmark;