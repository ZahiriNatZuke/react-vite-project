import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import { selectOneUser } from "../../users/usersSlice";

const PostAuthor = (props: { userId: string }) => {

    const author = useSelector((state: any) => selectOneUser(state, props.userId));

    return (
        <span className="font-xs font-mono text-white">by {author ? author.name : 'Unknown Author'}</span>
    )
};

PostAuthor.propTypes = {
    userId: PropTypes.string.isRequired
}

export default PostAuthor;