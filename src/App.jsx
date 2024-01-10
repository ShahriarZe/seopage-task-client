
import './App.css'

function App() {

  

  return (
    <>
      <h1 className='text-center text-5xl font-extrabold'>Task Manager</h1>

      <div className=" mt-8 overflow-x-auto">
      <div className="flex space-x-4">
        <div className="w-1/4 bg-gray-200 p-4">
          <h2 className="text-xl font-bold mb-4">To Do</h2>
          <div className="bg-white p-4 mb-4 rounded shadow w-72">
            {/* Task Card 1 */}
            <p>Task 1 - To Do</p>
          </div>
          <div className="bg-white p-4 mb-4 rounded shadow w-72">
            {/* Task Card 2 */}
            <p>Task 2 - To Do</p>
          </div>
          <div className="bg-white p-4 mb-4 rounded shadow w-72">
            {/* Task Card 2 */}
            <p>Task 2 - To Do</p>
          </div>
          <div className="bg-white p-4 rounded shadow w-72">
            {/* Task Card 3 */}
            <p>Task 3 - To Do</p>
          </div>
        </div>
        <div className="w-1/4 bg-gray-200 p-4">
          <h2 className="text-xl font-bold mb-4">Ongoing</h2>
          <div className="bg-white p-4 mb-4 rounded shadow w-72">
            {/* Task Card 1 */}
            <p>Task 1 - Ongoing</p>
          </div>
          <div className="bg-white p-4 mb-4 rounded shadow w-72">
            {/* Task Card 2 */}
            <p>Task 2 - Ongoing</p>
          </div>
          <div className="bg-white p-4 rounded shadow w-72">
            {/* Task Card 3 */}
            <p>Task 3 - Ongoing</p>
          </div>
        </div>
        <div className="w-1/4 bg-gray-200 p-4">
          <h2 className="text-xl font-bold mb-4">Incomplete</h2>
          <div className="bg-white p-4 mb-4 rounded shadow w-72">
            {/* Task Card 1 */}
            <p>Task 1 - Incomplete</p>
          </div>
          <div className="bg-white p-4 mb-4 rounded shadow w-72">
            {/* Task Card 2 */}
            <p>Task 2 - Incomplete</p>
          </div>
          <div className="bg-white p-4 rounded shadow w-72">
            {/* Task Card 3 */}
            <p>Task 3 - Incomplete</p>
          </div>
        </div>
        <div className="w-1/4 bg-gray-200 p-4">
          <h2 className="text-xl font-bold mb-4">Canceled</h2>
          <div className="bg-white p-4 mb-4 rounded shadow w-72">
            {/* Task Card 1 */}
            <p>Task 1 - Canceled</p>
          </div>
          <div className="bg-white p-4 mb-4 rounded shadow w-72">
            {/* Task Card 2 */}
            <p>Task 2 - Canceled</p>
          </div>
          <div className="bg-white p-4 rounded shadow w-72">
            {/* Task Card 3 */}
            <p>Task 3 - Canceled</p>
          </div>
        </div>
        <div className="w-1/4 bg-gray-200 p-4">
          <h2 className="text-xl font-bold mb-4">Canceled</h2>
          <div className="bg-white p-4 mb-4 rounded shadow w-72">
            {/* Task Card 1 */}
            <p>Task 1 - Canceled</p>
          </div>
          <div className="bg-white p-4 mb-4 rounded shadow w-72">
            {/* Task Card 2 */}
            <p>Task 2 - Canceled</p>
          </div>
          <div className="bg-white p-4 rounded shadow w-72">
            {/* Task Card 3 */}
            <p>Task 3 - Canceled</p>
          </div>
        </div>
        <div className="w-1/4 bg-gray-200 p-4">
          <h2 className="text-xl font-bold mb-4">Canceled</h2>
          <div className="bg-white p-4 mb-4 rounded shadow w-72">
            {/* Task Card 1 */}
            <p>Task 1 - Canceled</p>
          </div>
          <div className="bg-white p-4 mb-4 rounded shadow w-72">
            {/* Task Card 2 */}
            <p>Task 2 - Canceled</p>
          </div>
          <div className="bg-white p-4 rounded shadow w-72">
            {/* Task Card 3 */}
            <p>Task 3 - Canceled</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
