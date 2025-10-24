import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Register from "./components/user/register.tsx";
import Login from "./components/user/login.tsx";
import Logout from "./components/user/logout.tsx";
import Settings from "./components/settings/settings.tsx";
import PersonalDetails from "./components/settings/details.tsx";
import EmailPrefs from "./components/settings/emailPrefs.tsx";
import Security from "./components/settings/security.tsx";
import Saved from "./pages/saved.tsx";
import Home from "./pages/home";
import Entertainment from "./pages/entertainment.tsx";
import Life from "./pages/life";
import Science from "./pages/science";
import Earth from "./pages/earth";
import Sports from "./pages/sports";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="settings" element={<Settings />} />
        <Route path="settings/details" element={<PersonalDetails />} />
        <Route path="settings/emailPrefs" element={<EmailPrefs />} />
        <Route path="settings/security" element={<Security />} />
        <Route path="saved" element={<Saved />} />
        <Route path="entertainment" element={<Entertainment />} />
        <Route path="life" element={<Life />} />
        <Route path="science" element={<Science />} />
        <Route path="earth" element={<Earth />} />
        <Route path="sports" element={<Sports />} />
      </Route>

      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
}

export default App;
