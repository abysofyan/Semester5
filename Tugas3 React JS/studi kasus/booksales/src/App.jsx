
import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";

import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";

import Home from "./pages/Home";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Book from "./pages/Book";

import About from "./components/About";
import Services from "./components/Services";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function MainLayout() {
  return (
    <>
      <div className="container">
        <Header />
      </div>

      <Outlet />

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="book" element={<Book />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
