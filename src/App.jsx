import AddTodo from './Components/AddTodo'
import Todo from './Components/Todo'

function App() {

  return (

    <>
      <div className='w-full h-screen flex flex-col justify-start items-center pt-8 pb-4'>
        <div className='w-full px-4 md:w-3/4 md:px-0 lg:w-3/4 lg:px-0 xl:w-3/4 xl:px-0 h-full flex flex-col justify-between'>
          <h1 className='w-full flex justify-center text-4xl font-bold text-gray-300'>Redux ToolKit Todo App</h1>
          <AddTodo />

          <div className='bg-black/55 max-h-full overflow-y-auto px-4 py-3 mt-4 rounded border-2 border-zinc-700'>
            <Todo />
          </div>

        </div>
      </div>

    </>
  )
}

export default App
