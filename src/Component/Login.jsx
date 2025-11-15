import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { Navigate } from "react-router-dom";
// import UserContextProvider from "../context/userContextProvider";
// for context api
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, login } = useContext(UserContext);

  let [message, setMessage] = useState("");

  if (user) {
    return <Navigate to="/profile" replace />;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password });
    if (username && password) {
      setMessage = "";
      return <Navigate to="/profile" replace />;
    } else {
      setMessage = "Please enter username and password";
      console.log(message);
    }
  };

  return (
    <div className=" h-[calc(100vw-64)] w-full flex justify-center ">
      <div
        className="flex flex-col justify-center gap-2 w-96 h-fit p-3 mt-7 rounded-md"
        style={{ boxShadow: "0px 0px 8px #5d5757" }}
      >
        <div className="flex justify-center">
          <h1>Logi in</h1>
        </div>
        <input
          className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 "
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="User Name"
        />
        <input
          className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 "
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <div className="text-amber-700">{message}</div>
        <button
          className="p-2 w-52 self-center bg-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 "
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Login;
