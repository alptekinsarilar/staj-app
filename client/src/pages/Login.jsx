import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // login mi sign in kısmında mı onu kontrol ediyoruz
  // true ise login false ise signin tab'ı aktif durumda
  const [isLogin, setToLogin] = useState(true);
  const loginSigninHandler = () => {
    setToLogin((prevState) => !prevState);
  };

  const validateEmail = (email) => {
    return email.match(
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  // login signup request farkı ayarla

  const submitHandler = async (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      let domain = "register";
      if (isLogin) domain = "login";

      const response = await fetch(`/api/${domain}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        // Set HttpOnly cookie with JWT token
        document.cookie = `access_token=${data.accessToken}; HttpOnly; Secure`;
        // Redirect to protected page
        window.location.href = "/users";
      }
    } else {
      toast.error("Invalid email");
    }
  };

  return (
    <div>
      <main className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="m-12 text-xl">
            <h2>Log In or Sign Up to Continue</h2>
          </div>

          <div className="mx-auto flex w-3/4 min-w-fit flex-col overflow-hidden rounded-xl bg-slate-50 sm:w-1/3">
            <div className="my-4 mx-2 flex items-center justify-start">
              <button
                onClick={loginSigninHandler}
                className={` mx-2 cursor-pointer text-xl duration-300 ease-in-out hover:text-gray-500 ${
                  isLogin ? "pointer-events-none text-3xl" : "cursor-pointer"
                } `}
              >
                Log In
              </button>
              <button
                onClick={loginSigninHandler}
                className={` mx-2 cursor-pointer text-xl duration-300 ease-in-out hover:text-gray-500 ${
                  isLogin ? "cursor-pointer" : "pointer-events-none text-3xl"
                } `}
              >
                Sign Up
              </button>
            </div>
            <Toaster />
            <form action="#" onSubmit={submitHandler}>
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="yours@example.com"
                  className="m-1 rounded border-gray-400 bg-slate-200 py-1 px-2 text-xs"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="your password"
                  className="m-1 rounded border-gray-400 bg-slate-200 py-1 px-2 text-xs"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="submit"
                  className="flex-grow bg-green-400 py-4 text-sm text-slate-100 duration-300 ease-in-out hover:text-base"
                >
                  {isLogin ? "LOG IN" : "SIGN UP"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
