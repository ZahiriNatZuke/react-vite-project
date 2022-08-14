import { createSlice, nanoid } from '@reduxjs/toolkit';

const postsSlice = createSlice({
    name: "posts",
    initialState: [],
    reducers: {
        addPost: {
            reducer(state: any, action: any) {
                state.push(action.payload);
            },
            prepare(title: string, content: string, userId: string): { payload: any } {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId,
                        date: new Date().toISOString(),
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }
                    }
                }
            }
        },
        reactionPost(state: any, action: any) {
            const { postId, reaction } = action.payload;
            const post = state.find((post: any) => post.id === postId);
            if (post) post.reactions[reaction]++;
        }
    }
});

export const selectAllPosts = (state: any) => state.posts;

export const { addPost, reactionPost } = postsSlice.actions;

export default postsSlice.reducer;