import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./Components/UserLogin.jsx";
import UserRegister from "./Components/UserRegister.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLogin />} />
          <Route path="/user-register" element={<UserRegister />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
