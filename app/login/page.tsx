"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginPageLayout = () => {
    const router = useRouter();

    const handleSubmit = (e : React.FormEvent)=>{
        e.preventDefault();
        router.push("/dashboard");
    }

  return (
    // Full-screen container, centers the login box
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      
      {/* Login Card */}
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-xl">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Welcome Back
          </h1>
          <p className="mt-2 text-gray-600">
            Sign in to access your dashboard
          </p>
        </div>

        {/* Login Form */}
        <form className="space-y-6" onSubmit={(e)=>handleSubmit(e)}>
          
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
            <div className="flex items-center justify-between">
              <label 
                htmlFor="password" 
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <a 
                href="#" // Replace with your password reset link
                className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="••••••••"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Submit Button */}
          <div>
            {/* Using an 'a' tag or a button with type="button" prevents form submission */}
            <button
              type="submit"
              className="cursor-pointer w-full px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Sign Up Link */}
        <p className="text-sm text-center text-gray-600">
          Don&apos;t have an account?{' '}
          <Link 
            href="/signup" // Replace with your sign-up link
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPageLayout;