import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Content = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // deneme butonu
  const [isToggled, setToggled] = useState(true);
  const toggleHandler = () => {
    setToggled((prevState) => !prevState);
  };

  // login mi sign in kısmında mı onu kontrol ediyoruz
  // true ise login false ise signin tab'ı aktif durumda
  const [isLoginSignin, setLoginSignin] = useState(true);
  const loginSigninHandler = () => {
    setLoginSignin((prevState) => !prevState);
  };

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  // login signup request farkı ayarla

  const submitHandler = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      axios
        .post("/api/login", {
          email: email,
          password: password,
        })
        .then((result) => console.log(result))
        .catch((err) => console.error(err));
    } else {
      toast.error("Invalid email");
    }
  };

  return (
    <main className="container mx-auto">
      <div className="flex flex-col justify-center items-center">
        <div className="m-12 text-xl">
          <h2>Log In or Sign Up to Continue</h2>
        </div>

        <div className="flex flex-col w-3/4 sm:w-1/3 bg-slate-50 rounded-xl mx-auto min-w-fit overflow-hidden">
          <div className="flex items-center justify-start my-4 mx-2">
            <div
              onClick={loginSigninHandler}
              tabIndex={1}
              className={` text-xl ease-in-out duration-300 hover:text-gray-500 mx-2 cursor-pointer ${
                isLoginSignin
                  ? "text-3xl pointer-events-none"
                  : "cursor-pointer"
              } `}
            >
              Log In
            </div>
            <div
              onClick={loginSigninHandler}
              tabIndex={2}
              className={` text-xl ease-in-out duration-300 hover:text-gray-500 mx-2 cursor-pointer ${
                isLoginSignin
                  ? "cursor-pointer"
                  : "text-3xl pointer-events-none"
              } `}
            >
              Sign Up
            </div>
          </div>
          <Toaster />
          <form action="#" onSubmit={submitHandler}>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="yours@example.com"
                className="py-1 px-2 m-1 rounded border-gray-400 bg-slate-200 text-xs"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="your password"
                className="py-1 px-2 m-1 rounded border-gray-400 bg-slate-200 text-xs"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="bg-green-400 text-sm hover:text-base ease-in-out duration-300 flex-grow text-slate-100 py-4"
              >
                LOG IN
              </button>
            </div>
          </form>
        </div>
        <button
          onClick={toggleHandler}
          className={`p-4 ${isToggled ? "bg-gray-700" : "bg-gray-100"}`}
        >
          {isToggled ? "Active component" : "Inactive component"}
        </button>
      </div>
    </main>
  );
};

export default Content;
