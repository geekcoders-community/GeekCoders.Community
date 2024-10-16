
export default function Login(){

return(<>
<div className="flex min-h-screen bg-gray-100">
     {/* Red Box Section - left Side */}
     <div className="hidden md:flex pl-5 flex-1 items-center justify-center">
     <div className="bg-[url('./assets/loginframe.png')] bg-cover bg-center text-white pl-20 px-8 py-20 rounded-3xl w-3/4 h-5/6">
          <h1 className="text-4xl font-bold mt-32">Welcome back to</h1>
          <h1 className="text-4xl font-bold">Geek Coders!</h1>
        </div>
      </div>


      {/* Sign in Form Section */}
      <div className="flex flex-1 items-center justify-center p-6">
        {/* Container for the Sign-in Form */}
        <div className="max-w-md w-full">
          {/* Header for the Sign-in Form */}
          <h2 className="text-3xl font-Clashd font-bold mb-4">Login</h2>
          <p className="text-gray-600 mb-4">
            Welcome back!<br />Please enter your credentials
          </p>

          {/* Sign-in Form */}
          <form>
            {/* Name Input Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">UserName</label>
              <input
                type="text"
                className="mt-1 w-full px-3 py-2 border rounded-md bg-gray-200 focus:outline-none"
              />
            </div>

            

           

            {/* Password Input Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="mt-1 w-full px-3 py-2 border rounded-md bg-gray-200 focus:outline-none"
              />
            </div>
            {/*checkbox section*/}
            <div className="flex items-center">
            <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600 border-gray-300 rounded focus:ring-gray-500 mr-2"
            />
             <div className="flex justify-between w-full">
                     <label className="text-gray-700">Remember me</label>
                     <a href="#" className="text-gray-400">Forgot Password</a>
              </div>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 my-5 rounded-md text-lg font-semibold hover:bg-red-700"
            >
              SIGN IN
            </button>
          </form>
          <hr className="border-t-2 border-gray-300 my-4" />
          <button
              type="submit"
              className="w-full text-gray-400 py-2 rounded-md text-sm font-semibold border-2 border-red-600"
            >Continue using Google</button>
              {/* Link to sign up Page */}
          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account? <a href="#" className="text-red-600 hover:underline">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
</>);

}
