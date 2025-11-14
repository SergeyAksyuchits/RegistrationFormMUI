import { Routes, Route } from "react-router-dom";
import Registration from "./page/Registration";
import Login from "./page/Login";

function App() {
  return (
    <div className="App">
      <header>
        <a href="/log">Login</a>
        <a href="/reg">Registration</a>
      </header>
      <Routes>
        <Route path="/reg" element={<Registration />}></Route>
        <Route path="/log" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
