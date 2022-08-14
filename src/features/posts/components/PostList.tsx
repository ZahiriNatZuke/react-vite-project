import { useSelector } from "react-redux";
import PostAuthor from "./PostAuthor";
import { selectAllPosts } from "../postsSlice";
import PostTimeAgo from './PostTimeAgo';
import PostReaction from "./PostReaction";

const PostList = () => {

    const posts = useSelector(selectAllPosts);

    const renderPosts = posts.map((post: { id: string, title: string, content: string, userId: string, date: string }) => (
        <article key={post.id} className='border-2 rounded-box p-3 flex flex-col space-y-2'>
            <h3 className="text-white text-xl">{post.title}</h3>
            <p className="text-white font-serif text-sm pb-2">{post.content.substring(0, 100)}</p>
            <div className="flex justify-end items-center w-full">
                <PostAuthor userId={post.userId} /><PostTimeAgo timestamp={post.date} />
            </div>
            <PostReaction post={post} />
        </article>
    ));

    return (
        <section className="grid grid-cols-1 gap-y-3">
            <h2 className="text-white text-3xl font-extrabold">Posts</h2>
            {renderPosts}
        </section>
    )
}

export default PostList