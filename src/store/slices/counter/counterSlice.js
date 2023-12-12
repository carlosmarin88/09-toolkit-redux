import { createSlice } from '@reduxjs/toolkit'



export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 10
  }, // estado inicial
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.counter += 1
    },
    decrement: (state) => {
        state.counter -= 1
    },
    incrementByAmount: (state, action) => {
        action.payload = action.payload ? action.payload :  2
        console.log(action)
        state.counter = state.counter + action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions