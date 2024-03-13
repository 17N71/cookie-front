import Cookies from "js-cookie";
import { useState } from "react";
import "./App.css";

function App() {
  let data = {};
  const [myCookie, setmyCookie] = useState(() => Cookies.get("myCookie"));
  const submit = async e => {
    e.preventDefault();
    data = fetch("https://cookie-test-amxb.onrender.com/auth", {
      method: "post",
      credentials: "include",
    }).then(res => {
      console.log(res.headers.getSetCookie());
      return res.json();
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
