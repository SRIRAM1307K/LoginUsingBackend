import { useState } from "react";
import "./App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const credentials = document.getElementById("credential");

  function handleUser(evt) {
    setUser(evt.target.value);
  }

  function handlePass(evt) {
    setPass(evt.target.value);
  }

  function check(event) {
    event.preventDefault();

    axios
      .get(
        `https://login-using-backendserver.vercel.app/?username=${user}&password=${pass}`
      )
      .then(function (response) {
        if (response.data === true) {
          navigate("/success");
        } else {
          navigate("/failure");
        }
      });
  }

  function showCredential(event) {
    event.preventDefault();
    setShow(true);
  }

  return (
    <div>
      <div
        id="whole"
        className="h-screen flex flex-col items-center justify-center bg-cover bg-center"
      >
        <form
          onSubmit={check}
          className="bg-transparent backdrop-blur-sm rounded-2xl m-4 shadow-xl p-8 w-120 h-100 flex flex-col items-center border-transparent border"
        >
          <h1 className="font-extrabold font-mono text-4xl mb-6 text-red-600 ">
            Login
          </h1>
          <input
            onChange={handleUser}
            name="username"
            type="text"
            placeholder="Username"
            className="border bg-opacity-90 font-semibold text-lg bg-white text-black border-gray-300 outline-none rounded w-3/4 p-2 mt-10 mb-4"
          />
          <input
            onChange={handlePass}
            name="password"
            type="password"
            placeholder="Password"
            className="border bg-opacity-90 font-semibold text-lg bg-white text-black border-gray-300 outline-none rounded w-3/4 p-2 mb-4"
          />
          <button
            type="submit"
            className="bg-red-600 text-white font-semibold rounded w-3/4 py-2 hover:bg-red-700 transition hover:cursor-pointer mb-4"
          >
            Submit
          </button>
        </form>
        <div className="bg-transparent backdrop-blur-sm rounded-2xl mt-4 shadow-xl p-8 w-120 h-auto flex flex-col items-center border-transparent border">
          <button
            type="button"
            onClick={showCredential}
            className="bg-red-600 text-white font-semibold outline-none rounded w-full px-4 py-2 hover:bg-red-700 transition hover:cursor-pointer"
          >
            Click for credentials!
          </button>

          {show && (
            <div id="credential" className="mt-4 text-2xl p-1 rounded-xl">
              <h1 className="font-semibold">
                <span className="text-red-600 font-semibold">Username:</span>{" "}
                sriram
              </h1>
              <h1 className="font-semibold">
                <span className="text-red-600 font-semibold">Password: </span>
                123
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
