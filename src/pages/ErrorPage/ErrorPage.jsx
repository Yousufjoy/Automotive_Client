import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-orange-100">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-black mb-4">404</h1>
          <p className="text-2xl font-semibold text-black mb-8">
            Page Not Found
          </p>
          <p className="text-lg text-black">
            Oops! The page you are looking for does not exist.
          </p>
          <p className="text-lg text-black">
            Please check the URL or go back to the homepage.
          </p>
          <NavLink to="/">
            <button className="mt-8 px-6 py-3 rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none">
              Go to Homepage
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
