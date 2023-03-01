import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email) => {
    return email.match(
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      const response = await fetch(`/api/register`, {
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
        // Redirect to login page
        window.location.href = "/login";
      }
    } else {
      toast.error("Invalid email");
    }
  };

  return (
    <div>
      <main className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="mx-auto flex w-3/4 min-w-fit flex-col overflow-hidden rounded-xl bg-slate-50 sm:w-1/3">
            <div className="my-4 mx-2 flex items-center justify-start">
              <button
                className={` mx-2text-xl pointer-events-none text-3xl duration-300 ease-in-out
                 `}
              >
                Sign Up
              </button>
            </div>
            <Toaster />
            <form action="#" onSubmit={submitHandler}>
              <div className="flex flex-col">
                <input
                  type="text"
                  value={email}
                  placeholder="yours@example.com"
                  className="m-1 rounded border-gray-400 bg-slate-200 py-1 px-2 text-xs"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  value={password}
                  placeholder="your password"
                  className="m-1 rounded border-gray-400 bg-slate-200 py-1 px-2 text-xs"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="submit"
                  className="flex-grow bg-green-400 py-4 text-sm text-slate-100 duration-300 ease-in-out hover:text-base"
                >
                  SIGN UP
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
