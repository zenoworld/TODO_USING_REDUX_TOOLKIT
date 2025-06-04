import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeTodo, enableEdit, updateTodo } from '../features/todo/todoSlice'

function Todos() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  const [editInput, setEditInput] = useState({})

  const handleEdit = (id) => {
    if (editInput[id]?.trim()) {
      console.log(editInput[id]?.trim());

      dispatch(updateTodo({ id, newText: editInput[id]?.trim() }))
      setEditInput(prev => ({ ...prev, [id]: "" }))
    }
  }
  const handleChangeEdit = (id, value) => {
    setEditInput(prev => ({ ...prev, [id]: value }))
  }

  return (
    <>
      <div className='text-gray-300 my-5 text-3xl'>Todos</div>
      <ul className="list-none">
        {
          todos.map((todo) => (
            <li
              className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
              key={todo.id}
            >
              {
                todo.edit ?
                  <div className='flex justify-center'>
                    <input
                      type='text'
                      onChange={(e) => handleChangeEdit(todo.id, e.target.value)}
                      placeholder={todo.text}
                      value={editInput[todo.id] || ''}
                      className='px-3 py-1 rounded outline-none bg-zinc-700 text-white'
                    />
                  </div>
                  : <div className='text-white'>{todo.text}</div>
              }


              <div className='w-1/7 flex justify-between  gap-2 '>

                {
                  todo.edit ?
                    <button
                      onClick={() => handleEdit(todo.id)}
                      className='bg-green-400 py-1 px-4 rounded flex justify-center items-center focus:outline-none hover:bg-green-500'
                    >
                      <img src='/file.png' alt='file' className='w-[22px]' />
                    </button>

                    : <button
                      onClick={() => {
                        dispatch(enableEdit(todo.id));
                        setEditInput({[todo.id] :todo.text});
                      }}
                      className="text-white bg-amber-400 border-0 py-1 px-4 focus:outline-none hover:bg-amber-600 rounded text-md"
                    >
                      <img src='/edit.png' alt='edit' className='w-[22px]' />
                    </button>
                }

                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default Todos