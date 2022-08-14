import { useDispatch } from "react-redux";
import { reactionPost } from "../postsSlice";
import PropTypes from 'prop-types';

const reactionEmoji = {
    thumbsUp: "👍",
    wow: "😮",
    heart: "❤️",
    rocket: "🚀",
    coffee: "☕️"
};

const PostReaction = (props: { post: any }) => {

    const dispatch = useDispatch();

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]: [string, string]) => {
        return (
            <button key={name} type='button' className="text-white btn btn-xs"
                onClick={() => dispatch(reactionPost({ postId: props.post.id, reaction: name }))}>
                {emoji}&nbsp;&nbsp;{props.post.reactions[name]}
            </button>
        )
    })

    return (
        <div className="flex space-x-3 justify-start items-center">
            {reactionButtons}
        </div>
    )
}

PostReaction.propTypes = {
    post: PropTypes.object.isRequired
}

export default PostReaction;