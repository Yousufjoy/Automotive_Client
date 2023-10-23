import { Link } from "react-router-dom";
import logo from "../../assets/imgs/logo2.png";
import registerImage from "../../assets/imgs/RegisterBanner.jpg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const Register = () => {
  const authInfo = useContext(AuthContext);
  const { createUser } = authInfo;

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    createUser(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        form.reset();
        Swal.fire("Great!", "Your Account Has been created!", "success");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };
  return (
    <div>
      <div>
        <div className="min-h-screen md:grid md:grid-cols-2 lg:grid-cols-3">
          <div className="hidden md:block h-48 lg:col-span-2 min-h-screen relative overflow-hidden bg-gray-400 shadow-2xl">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src={registerImage}
            />
            <div className="absolute inline-block p-4 min-w-full text-white text-5xl lg:text-7xl mt-20 ml-20 bg-gray-600 bg-opacity-50">
              <h1>Beyond transportation, an expression of freedom.</h1>
            </div>
          </div>

          <div className="flex items-center justify-center p-6 min-h-screen w-full">
            <div className="w-full">
              <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <a href="#" className="flex justify-center font-bold text-4xl">
                  <img src={logo} alt="" />
                </a>

                <h2 className="mt-6 text-2xl font-extrabold text-center leading-9">
                  Sign Up
                </h2>

                <p className="mt-2 text-sm text-center leading-5 max-w">
                  <span>Already have an account? </span>
                  <Link to="/login" className="text-blue-500 text-lg font-bold">
                    Login
                  </Link>
                </p>
              </div>

              <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <form onSubmit={handleRegister}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-5"
                    >
                      Email address
                    </label>

                    <div className="mt-1 rounded-md shadow-sm">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoFocus
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 leading-5"
                    >
                      Password
                    </label>

                    <div className="mt-1 rounded-md shadow-sm">
                      <input
                        name="password"
                        id="password"
                        type="password"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <span className="block w-full rounded-md shadow-sm">
                      <button
                        type="submit"
                        className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-[#F7A034] border border-transparent rounded-md hover:bg-red-500 focus:outline-none transition duration-150 ease-in-out"
                      >
                        Sign in
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
