import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import "./App.css";

function App() {
  const [myCookie, setmyCookie] = useState(() => Cookies.get("myCookie"));
  const submit = async e => {
    e.preventDefault();
    await axios.post("https://cookie-test-amxb.onrender.com/auth", null, {
      headers: {
        "User-Agent": "insomnia/2023.5.8",
        "Content-Type": "application/x-www-form-urlencoded",
        content: "value",
      },
    });
    setmyCookie(Cookies.get("myCookie"));
  };
  return (
    <>
      <form onSubmit={submit}>
        <button>click to me</button>
      </form>
      {JSON.stringify(myCookie)}
    </>
  );
}

export default App;
