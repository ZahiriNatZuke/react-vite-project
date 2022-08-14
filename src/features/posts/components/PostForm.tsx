import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../postsSlice';
import { selectAllUsers } from '../../users/usersSlice';
import { useSelector } from 'react-redux';

const PostForm = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectAllUsers);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    const onTitleChange = (e: React.FormEvent<HTMLInputElement>) => setTitle((e.target as HTMLInputElement).value);
    const onContentChange = (e: React.FormEvent<HTMLTextAreaElement>) => setContent((e.target as HTMLTextAreaElement).value);
    const onAuthorChange = (e: React.FormEvent<HTMLSelectElement>) => setUserId((e.target as HTMLSelectElement).value);

    const usersOption = users.map((user: any) => (
        <option value={user.id} key={user.id}>
            {user.name}
        </option>
    ));

    const canSave = Boolean(title.trim()) && Boolean(content.trim()) && Boolean(userId);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (canSave) {
            dispatch(addPost(title, content, userId));
            setTitle('');
            setContent('');
            setUserId('');
        }
    };

    return (
        <section className='flex flex-col space-y-3'>
            <h2 className="text-white text-3xl font-extrabold">Add a New Post</h2>
            <form className='flex flex-col space-y-3' onSubmit={onSubmit}>
                <label className='label font-semibold text-white' htmlFor='postTitle'>Post Title:</label>
                <input className='input text-slate-600' type='text' id='postTitle' name='postTitle' placeholder='Type a title for your post'
                    value={title} onChange={onTitleChange} />

                <label className='label font-semibold text-white' htmlFor="postAuthor">Author:</label>
                <select name='postAuthor' id='postAuthor' className="select w-full max-w-xs" onChange={onAuthorChange} value={userId}>
                    <option selected>Select the author of post</option>
                    {usersOption}
                </select>

                <label className='label font-semibold text-white' htmlFor="postContent">Post Content:</label>
                <textarea className='textarea h-24 resize-none text-slate-600' name="postContent" id="postContent" placeholder='Type the content of your post'
                    value={content} onChange={onContentChange}></textarea>
                <button disabled={!canSave} className='btn glass' type="submit">Save Post</button>
            </form>
        </section>
    )
}

export default PostForm;