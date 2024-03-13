import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import "./App.css";

function App() {
  let data = {};
  const [myCookie, setmyCookie] = useState(() => Cookies.get("myCookie"));
  const submit = async e => {
    e.preventDefault();
    data = await axios.post("https://cookie-test-amxb.onrender.com/auth", null, {
      withCredentials: true,
    });
    setmyCookie(Cookies.get("myCookie"));
  };
  return (
    <>
      <form onSubmit={submit}>
        <button>click to me</button>
      </form>
      {data}
      {JSON.stringify(myCookie)}
    </>
  );
}

export default App;
