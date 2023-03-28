import { ADD_TODO } from "../actions"

const initialState = [
  { id: 1, title: "First Task", status: false },
  { id: 2, title: "Second Task", status: false },
  { id: 3, title: "Third Task", status: true }
]

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload]
    default:
      return state
  }
}
