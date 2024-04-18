import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import RegisterView from "./page/RegisterPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} index />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
