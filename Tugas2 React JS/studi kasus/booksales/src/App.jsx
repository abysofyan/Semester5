
import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";

import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";

import Home from "./pages/Home";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

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
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
