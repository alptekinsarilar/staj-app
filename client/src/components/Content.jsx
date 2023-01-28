import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

const Content = () => {

  const url = "api/users";
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  
  /* const [users, setUsers] = useState([]); */


  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      axios.post(url, {
        email: data.email,
        password: data.password
      })
      /* axios.get("api/users")
        .then(res => {
          setUsers(res.data)
          users.forEach(user => console.log(user));
        })
        .catch(e => console.log(e)) */
    } else {
      toast.error('Invalid email');
    }
  }

  const [email, setEmail] = useState("");
  return (
    <main className="container mx-auto">
      <div className="flex flex-col justify-center items-center">
        <div className="m-12 text-xl">
          <h2>Log In or Sign Up to Continue</h2>
        </div>

        <div className="flex flex-col w-3/4 sm:w-1/3 bg-slate-50 rounded-xl mx-auto min-w-fit overflow-hidden">
          <div className="flex items-center justify-start my-4 mx-2">
            <div
              tabIndex={1}
              className=" text-xl ease-in-out duration-300 focus:text-3xl focus:pointer-events-none  hover:text-gray-500 mx-2 cursor-pointer"
            >
              Log In
            </div>
            <div
              tabIndex={2}
              className=" text-xl ease-in-out duration-300 focus:text-3xl focus:pointer-events-none hover:text-gray-500 mx-2 cursor-pointer"
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
                type="text"
                placeholder="your password"
                className="py-1 px-2 m-1 rounded border-gray-400 bg-slate-200 text-xs"
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
      </div>
    </main>
  );
};

export default Content;
