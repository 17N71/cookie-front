function App() {
  const submit = async e => {
    e.preventDefault();
    await fetch("https://cookie-test-amxb.onrender.com/auth", {
      credentials: "include",
      method: "post",
    }).then(res => {
      console.log(res.headers.getSetCookie());
      return res;
    });
  };
  return (
    <>
      asdsadasdasd
      <form onSubmit={submit}>
        <button>click to me</button>
      </form>
    </>
  );
}

export default App;
