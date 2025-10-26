import Link from "next/link";

const SignUpPageLayout = () => {

  return (
    // Full-screen container, centers the sign-up box
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      
      {/* Sign-up Card */}
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-xl">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Create Your Account
          </h1>
          <p className="mt-2 text-gray-600">
            Get started by filling out the info below
          </p>
        </div>

        {/* Sign-up Form */}
        <form className="space-y-6">
          
          {/* Full Name Input */}
          <div className="space-y-1">
            <label 
              htmlFor="fullname" 
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              id="fullname"
              name="fullname"
              type="text"
              autoComplete="name"
              required
              placeholder="Your Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Email Input */}
          <div className="space-y-1">
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Password Input */}
          <div className="space-y-1">
            <label 
              htmlFor="password" 
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              placeholder="••••••••"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="space-y-1">
            <label 
              htmlFor="password" 
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              id="confirm_password"
              name="confirm_password"
              type="password"
              autoComplete="new-password"
              required
              placeholder="••••••••"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="button"
              className="w-full px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
            >
              Create Account
            </button>
          </div>
        </form>

        {/* Sign In Link */}
        <p className="text-sm text-center text-gray-600">
          Already have an account?{' '}
          <Link
            href="/login" // Replace with your sign-in link
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPageLayout;