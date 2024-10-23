
import PropTypes from "prop-types";


const Bookmark = ({ bookmark }) => {
    const { name } = bookmark;
    return (
        <div className="bg-slate-500 mb-2 rounded text-white p-4">
            <h2>{ name}</h2>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark:PropTypes.object
}
export default Bookmark;