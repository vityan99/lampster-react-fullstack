import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import style from "./app.module.css";
import Header from "../client/head/header/Header";
import MainPage from "../client/pages/mainPage/MainPage";
import AboutPage from "../client/pages/aboutPage/AboutPage";
import ContactsPage from "../client/pages/contactsPage/ContactsPage";
import AdminPanel from "../admin/adminPanel/AdminPanel";
import ErrorPage from "../client/pages/errorPage/ErrorPage";
import Footer from "../client/footer/Footer";

function App() {
  return (
    <Router>
      <div className={style.container}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <MainPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Header />
                <AboutPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/contacts"
            element={
              <>
                <Header />
                <ContactsPage />
                <Footer />
              </>
            }
          />
          <Route path="/admin" element={<AdminPanel />} />
          <Route
            path="*"
            element={
              <>
                <Header />
                <ErrorPage />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
