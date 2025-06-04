import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'


function AddTodo() {
  const [input, setInput] = useState("")
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')
  }
  return (
    <form onSubmit={addTodoHandler}
      className="flex mt-12">
      <input
        type="text"
        placeholder=" Enter a Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-blue-500 py-1.5 text-white"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
        Add todo
      </button>
    </form>
  )
}

export default AddTodo