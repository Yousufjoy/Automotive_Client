import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/imgs/logo2.png";
import loginImage from "../../assets/imgs/loginBanner.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { AiFillGoogleCircle } from "react-icons/ai";
import Swal from "sweetalert2";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const authInfo = useContext(AuthContext);
  const { loginUser } = authInfo;
  const auth = getAuth(app);

  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`error code: ${errorCode} message: ${errorMessage}`);
        setErrorMessage(errorMessage);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
        });
      });
  };

  return (
    <div>
      <div className="min-h-screen md:grid md:grid-cols-2 lg:grid-cols-3">
        <div className="hidden md:block h-48 lg:col-span-2 min-h-screen relative overflow-hidden bg-gray-400 shadow-2xl">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={loginImage}
          />
          <div className="absolute inline-block p-4 min-w-full text-white text-5xl lg:text-7xl mt-20 ml-20 bg-gray-600 bg-opacity-50">
            <h1>Where the road ends, the drive begins</h1>
          </div>
        </div>

        <div className="flex items-center justify-center p-6 min-h-screen w-full">
          <div className="w-full">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <a href="#" className="flex justify-center font-bold text-4xl">
                <img src={logo} alt="" />
              </a>

              <h2 className="mt-6 text-2xl font-extrabold text-center leading-9">
                Sign in to your account
              </h2>

              <p className="mt-2 text-sm text-center leading-5 max-w">
                <span>Dont have an account? </span>
                <Link
                  to="/register"
                  className="text-blue-500 text-lg font-bold"
                >
                  create a new account
                </Link>
              </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
              <form onSubmit={handleLogin}>
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
                <div className="flex flex-col space-y-5">
                  <span className="flex items-center justify-center space-x-2">
                    <span className="h-px bg-gray-400 w-14"></span>
                    <span className="font-normal text-gray-500">
                      or login with
                    </span>
                    <span className="h-px bg-gray-400 w-14"></span>
                  </span>
                  <div className="flex flex-col space-y-4">
                    <a
                      href="#"
                      className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
                    >
                      <span>
                        <AiFillGoogleCircle className=" text-blue-400 text-xl"></AiFillGoogleCircle>
                      </span>
                      <span
                        onClick={loginWithGoogle}
                        className="text-sm font-medium text-gray-800 group-hover:text-white"
                      >
                        Google
                      </span>
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
