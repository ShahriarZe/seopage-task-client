import { TbNotes } from "react-icons/tb";
import { TiMessages } from "react-icons/ti";
import { RiAttachment2 } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";
import './App.css'

function App() {



  return (
    <>
      <h1 className='text-center text-5xl font-extrabold'>Task Manager</h1>

      <div className=" mt-8 overflow-x-auto ">
        <div className="flex space-x-4">


          {/* Section */}
          <div className=" bg-gray-200 px-2">
            <h2 className="text-xl font-bold mb-4">Incomplete</h2>
            <div className=" h-[60vh] overflow-y-auto">

              {/* Card */}
              <div className="card bg-base-100 mb-4 p-2 w-full">
                <div className="card-body">
                  <div className='flex justify-between items-center mb-4'>
                    <div className='flex items-center'>
                      <div className="w-10 h-10 mr-2">
                        <img className='rounded-full w-full h-full' src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
                      </div>
                      <p className='font-bold'>Client Name</p>
                    </div>
                    <div className='flex items-center'>
                      <div className="w-10 h-10 mr-2">
                        <img className='rounded-full w-full h-full' src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
                      </div>
                      <p className='font-bold'>Sadik Ishtiak</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-4">
                    <p className="font-bold">Lorem ipsum dolor sit amet </p>
                    <button className="flex items-center btn btn-xs"><TbNotes /> 1/2</button>
                  </div>
                  <div className="flex items-center mt-4 w-full mx-auto">
                    <div className="w-4 mr-2">
                      <img className='rounded-full' src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
                    </div>
                    <div className="w-4 mr-2">
                      <img className='rounded-full ' src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
                    </div>
                    <button className="btn btn-xs mr-2">12+</button>
                    <button className="btn btn-xs flex items-center mr-2"><TiMessages />15</button>
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn btn-xs mr-2" onClick={() => document.getElementById('my_modal_3').showModal()}><RiAttachment2 />25</button>
                    <dialog id="my_modal_3" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click on ✕ button to close</p>
                      </div>
                    </dialog>
                    <button className="btn btn-xs flex items-center"><FaRegCalendarAlt />25-3-2023</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-gray-200 px-2">
            <h2 className="text-xl font-bold mb-4">Incomplete</h2>
            <div className=" h-[60vh] overflow-y-auto">

              {/* Card */}
              <div className="card bg-base-100 mb-4 p-2 w-full">
                <div className="card-body">
                  <div className='flex justify-between items-center mb-4'>
                    <div className='flex items-center'>
                      <div className="w-10 h-10 mr-2">
                        <img className='rounded-full w-full h-full' src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
                      </div>
                      <p className='font-bold'>Client Name</p>
                    </div>
                    <div className='flex items-center'>
                      <div className="w-10 h-10 mr-2">
                        <img className='rounded-full w-full h-full' src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
                      </div>
                      <p className='font-bold'>Sadik Ishtiak</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-4">
                    <p className="font-bold">Lorem ipsum dolor sit amet </p>
                    <button className="flex items-center btn btn-xs"><TbNotes /> 1/2</button>
                  </div>
                  <div className="flex items-center mt-4 w-full mx-auto">
                    <div className="w-4 mr-2">
                      <img className='rounded-full' src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
                    </div>
                    <div className="w-4 mr-2">
                      <img className='rounded-full ' src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
                    </div>
                    <button className="btn btn-xs mr-2">12+</button>
                    <button className="btn btn-xs flex items-center mr-2"><TiMessages />15</button>
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn btn-xs mr-2" onClick={() => document.getElementById('my_modal_3').showModal()}><RiAttachment2 />25</button>
                    <dialog id="my_modal_3" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click on ✕ button to close</p>
                      </div>
                    </dialog>
                    <button className="btn btn-xs flex items-center"><FaRegCalendarAlt />25-3-2023</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-gray-200 px-2">
            <h2 className="text-xl font-bold mb-4">Incomplete</h2>
            <div className=" h-[60vh] overflow-y-auto">

              {/* Card */}
              <div className="card bg-base-100 mb-4 p-2 w-full">
                <div className="card-body">
                  <div className='flex justify-between items-center mb-4'>
                    <div className='flex items-center'>
                      <div className="w-10 h-10 mr-2">
                        <img className='rounded-full w-full h-full' src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
                      </div>
                      <p className='font-bold'>Client Name</p>
                    </div>
                    <div className='flex items-center'>
                      <div className="w-10 h-10 mr-2">
                        <img className='rounded-full w-full h-full' src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
                      </div>
                      <p className='font-bold'>Sadik Ishtiak</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-4">
                    <p className="font-bold">Lorem ipsum dolor sit amet </p>
                    <button className="flex items-center btn btn-xs"><TbNotes /> 1/2</button>
                  </div>
                  <div className="flex items-center mt-4 w-full mx-auto">
                    <div className="w-4 mr-2">
                      <img className='rounded-full' src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
                    </div>
                    <div className="w-4 mr-2">
                      <img className='rounded-full ' src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
                    </div>
                    <button className="btn btn-xs mr-2">12+</button>
                    <button className="btn btn-xs flex items-center mr-2"><TiMessages />15</button>
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn btn-xs mr-2" onClick={() => document.getElementById('my_modal_3').showModal()}><RiAttachment2 />25</button>
                    <dialog id="my_modal_3" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click on ✕ button to close</p>
                      </div>
                    </dialog>
                    <button className="btn btn-xs flex items-center"><FaRegCalendarAlt />25-3-2023</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
