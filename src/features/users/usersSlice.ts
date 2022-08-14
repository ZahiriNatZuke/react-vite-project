
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
    { id: nanoid(), name: 'John Doe', },
    { id: nanoid(), name: 'Dude Nevski' },
    { id: nanoid(), name: 'Dave Gray', }
];

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {}
});

export const selectAllUsers = (state: any) => state.users;

export const selectOneUser = (state: any, userId: string) => {
    return state.users.find((user: any) => user.id === userId);
};

export default userSlice.reducer;