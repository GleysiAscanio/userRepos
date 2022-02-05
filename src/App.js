import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./Components/UserLogin.jsx";
import UserRegister from "./Components/UserRegister.jsx";
import ViewRepositories from "./Components/ViewRepositories.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserRegister />} />
          <Route path="user-login" element={<UserLogin />} />
          <Route path="view-repositories" element={<ViewRepositories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
