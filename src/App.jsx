import Cookies from "js-cookie";
import { useState } from "react";

function App() {
  const [cookie, setCookie] = useState("");
  const submit = e => {
    e.preventDefault();
    fetch("https://pdbtjldv-3000.euw.devtunnels.ms/auth", {
      credentials: "include",
      method: "post",
    }).then(res => {
      setCookie(Cookies.get("myCookie"));
      return res.json();
    });
  };
  return (
    <>
      asdsadasdasd
      <form onSubmit={submit}>
        <button>click to me</button>
      </form>
      <pre>thats cookie from backend : {cookie}</pre>
    </>
  );
}

export default App;
