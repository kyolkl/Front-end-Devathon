import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import RegisterView from "./page/RegisterPage";
import AuthLayout from "./layouts/AuthLayout";
import ProfileUser from "./page/ProfileUser";
import Generate from "./page/GeneratePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<HomePage />} />
            <Route path="/user/settings" element={<ProfileUser />} />
            <Route path="/generator" element={<Generate />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterView />} />
          </Route>
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
