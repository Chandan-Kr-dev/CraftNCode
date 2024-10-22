import React from 'react'

const SignUp = () => {
  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  return (
    <main className="h-[52vh] w-full">
      <div className="">
        <div className=" w-fit p-5 text-center text-white border-2 border-white rounded-md absolute top-1/3 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <h1 className='text-2xl my-3'>SignUp</h1>
          <form onSubmit={handleSubmit} className="space-y-4" action="">
            <div className="input grid grid-cols-3">
              <label htmlFor="">Name : </label>
              <input
                className="col-span-2 bg-black outline-none px-2 py-1 "
                type="text"
                placeholder="Chandan Kumar"
              />
            </div>
            <div className="input grid grid-cols-3">
              <label htmlFor="">Email : </label>
              <input
                className="col-span-2 bg-black outline-none px-2 py-1"
                type="email"
                placeholder="ck@gmail.com"
              />
            </div>
            <div className="input grid grid-cols-3">
              <label htmlFor="">Password: </label>
              <input
                className="col-span-2 bg-black outline-none px-2 py-1"
                type="password"
                placeholder="********"
              />
            </div>
            <button type='submit' className="border-2 border-gray-50 rounded-md  px-2 py-1">
              SignUp
            </button>
          </form>
          <div className="text-center my-4">
            <p>--------or------</p>
            <h1>
              Already have an Account{" "}
              <a className="text-blue-600" href="/login">
                Login
              </a>
            </h1>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SignUp