import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./Components/UserLogin.jsx";
import UserRegister from "./Components/UserRegister.jsx";
import WelcomeUser from "./Components/WelcomeUser.jsx";
import ViewFavorites from "./Components/ViewFavorites.jsx";
import ViewRepositories from "./Components/ViewRepositories.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/userRepos/">
        <Routes>
          <Route path="/" element={<UserRegister />} />
          <Route path="user-login" element={<UserLogin />} />
          <Route path="/welcome-user" element={<WelcomeUser />} />
          <Route path="/view-favorites" element={<ViewFavorites />} />
          <Route path="/view-repositories" element={<ViewRepositories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
