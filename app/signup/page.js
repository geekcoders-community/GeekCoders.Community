export default function SignUp() {
    return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sign Up Form Section */}
      <div className="flex flex-1 items-center justify-center p-6">
        {/* Container for the Sign-Up Form */}
        <div className="max-w-md w-full">
          {/* Header for the Sign-Up Form */}
          <h2 className="text-3xl font-Clashd font-bold mb-4">Sign up</h2>
          <p className="text-gray-600 mb-4">
            Welcome to Geek Coders <br /> Join our community today!
          </p>

          {/* Sign-Up Form */}
          <form>
            {/* Name Input Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="mt-1 w-full px-3 py-2 border rounded-md bg-gray-200 focus:outline-none"
              />
            </div>

            {/* E-Mail Input Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">E-Mail</label>
              <input
                type="email"
                className="mt-1 w-full px-3 py-2 border rounded-md bg-gray-200 focus:outline-none"
              />
            </div>

            {/* Phone Number Input Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Phone No</label>
              <input
                type="tel"
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

            {/* Confirm Password Input Field */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                className="mt-1 w-full px-3 py-2 border rounded-md bg-gray-200 focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-md text-lg font-semibold hover:bg-red-700"
            >
              SIGN UP
            </button>
          </form>

          {/* Link to Login Page */}
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an existing account? <a href="#" className="text-red-600 hover:underline">Login</a>
          </p>
        </div>
      </div>

      {/* Red Box Section - Right Side */}
      <div className="hidden md:flex pl-5 flex-1 items-center justify-center">
     <div className="bg-[url('./assets/loginframe.png')] bg-cover bg-center text-white pl-20 px-8 py-20 rounded-3xl w-3/4 h-5/6">
          <h1 className="text-4xl font-bold mt-32  ">Hello Geek!</h1>
          <h1 className="text-4xl font-bold">Join Geek Coders!</h1>
        </div>
      </div>
    </div>
  );
}