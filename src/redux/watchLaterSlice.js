import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    watchLaterlist:[]
}

const watchLaterSlice = createSlice({
    name: 'watchLater',
    initialState,
    reducers: {
        addToWatchLater: (state,action) => {
            state.watchLaterlist.push(action.payload)
        }
    }
});

export const {
    addToWatchLater
} = watchLaterSlice.actions
export default watchLaterSlice.reducer