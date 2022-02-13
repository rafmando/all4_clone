import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    watchLater:[]
}

const watchLaterSlice = createSlice({
    name: 'watchLater',
    initialState,
    reducers: {
        addToWatchLater: (state,action) => {
            const show = {
                id: action.payload.id,
                name: action.payload.name,
                img: action.payload.img,
                description: action.payload.description,
            }

            const quantity = action.payload.name.split
            console.log(quantity)
            state.watchLater.push(show)
            
            
        }
    }
});

export const {
    addToWatchLater
} = watchLaterSlice.actions
export default watchLaterSlice.reducer