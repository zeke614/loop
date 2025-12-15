import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Register from "./components/user/register.tsx";
import Login from "./components/user/login.tsx";
import Logout from "./components/user/logout.tsx";
import Settings from "./components/settings/settings.tsx";
import PersonalDetails from "./components/settings/details.tsx";
import EmailReset from "./components/settings/emailReset.tsx";
import PasswordReset from "./components/settings/passwordReset.tsx";
import UsernameReset from "./components/settings/displayNameReset.tsx";
import EmailPrefs from "./components/settings/emailPrefs.tsx";
import Security from "./components/settings/security.tsx";
import Countries from "./components/settings/countries.tsx";
import Saved from "./pages/saved.tsx";
import Home from "./pages/frontpage/home.tsx";
import Entertainment from "./pages/entertainment.tsx";
import Life from "./pages/life/life.tsx";
import Science from "./pages/genius&folly/science.tsx";
import Earth from "./pages/earth/earth.tsx";
import Finance from "./pages/finance";
import Legacy from "./pages/timeCapsule/legacy.tsx";
import Info from "./pages/info.tsx";
import ArticlePage from "./components/articlePage";
import PrivacyPolicy from "./components/privacy.tsx";
import ForgotPassword from "./components/user/forgotPassword.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="settings" element={<Settings />} />
        <Route path="settings/details" element={<PersonalDetails />} />
        <Route path="settings/countries" element={<Countries />} />
        <Route path="settings/emailPrefs" element={<EmailPrefs />} />
        <Route path="settings/security" element={<Security />} />
        <Route path="saved" element={<Saved />} />
        <Route path="entertainment" element={<Entertainment />} />
        <Route path="life" element={<Life />} />
        <Route path="science" element={<Science />} />
        <Route path="earth" element={<Earth />} />
        <Route path="legacy" element={<Legacy />} />
        <Route path="finance" element={<Finance />} />
        <Route path="info" element={<Info />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Route>

      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="settings/emailReset" element={<EmailReset />} />
      <Route path="settings/passwordReset" element={<PasswordReset />} />
      <Route path="forgotPassword" element={<ForgotPassword />} />
      <Route path="settings/displayNameReset" element={<UsernameReset />} />
      <Route path="articles/:articleId" element={<ArticlePage />} />
    </Routes>
  );
}

export default App;
