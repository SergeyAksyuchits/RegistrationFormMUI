import "../App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

function Login() {
  const [email, eFunc] = useState();
  const [passw, pFunc] = useState();
  const testEmail = /[A-Za-z0-9]+\@[A-Za-z]+\.[A-Za-z]+/;
  const testPassw = /[\@\*\$\.A-Za-z0-9]+/;

  return (
    <div className="App">
      <h1>Login</h1>
      <TextField
        id="standard-basic"
        label="Email"
        variant="standard"
        onChange={(e) => {
          eFunc(e.target.value);
        }}
      />
      <TextField
        id="standard-basic"
        label="Password"
        type="password"
        variant="standard"
        onChange={(e) => {
          pFunc(e.target.value);
        }}
      />
      <Button
        variant="outlined"
        onClick={() => {
          testEmail.test(email) && testPassw.test(passw)
            ? alert("Успешный вход")
            : alert("Невалидная почта");
        }}
      >
        SIGN UP
      </Button>
      <h4>
        <a href="/reg">REGISTER</a>
      </h4>
    </div>
  );
}

export default Login;
