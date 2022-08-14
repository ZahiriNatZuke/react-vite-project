import PropTypes from 'prop-types';
import { parseISO, formatDistanceToNow } from 'date-fns';

const PostTimeAgo = (props: { timestamp: string }) => {

    const timeAgo = () => {
        const date = parseISO(props.timestamp);
        const timePeriod = formatDistanceToNow(date);
        return `, ${timePeriod} ago.`;
    }

    return (
        <span title={props.timestamp} className='text-white font-mono text-sm'>
            {timeAgo()}
        </span>
    )
}

PostTimeAgo.propTypes = {
    timestamp: PropTypes.string.isRequired
}

export default PostTimeAgo;