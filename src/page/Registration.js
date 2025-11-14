import "../App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

function Registration() {
  const [email, eFunc] = useState();
  const [passw, pFunc] = useState();
  const [confPassw, cpFunc] = useState();
  const testEmail = /[A-Za-z0-9]+\@[A-Za-z]+\.[A-Za-z]+/;
  const testPassw = /[\@\*\$\.A-Za-z0-9]+/;
  return (
    <div className="App">
      <h1>Registration</h1>
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
        variant="standard"
        type="password"
        onChange={(e) => {
          pFunc(e.target.value);
        }}
      />
      <TextField
        id="standard-basic"
        label="Confirm Password"
        variant="standard"
        type="password"
        onChange={(e) => {
          cpFunc(e.target.value);
        }}
      />
      <Button
        variant="outlined"
        onClick={() => {
          passw === confPassw && testPassw.test(passw) && testEmail.test(email)
            ? alert("Успешная регистрация")
            : alert(
                "Пароль должен содержать спецсимволы & некорректная почта & пароли не совпадают"
              );
        }}
      >
        SIGN UP
      </Button>
      <h4>
        Already have an account? <a href="/log">SIGN UP</a>
      </h4>
    </div>
  );
}

export default Registration;
