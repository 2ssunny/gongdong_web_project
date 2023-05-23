import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Nav from "./components/nav.js";
import Home from "./components/home.js";
import About from "./components/about.js";
import Contact from "./components/contact.js";
import Chat from "./components/chat.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Chat" element={<Chat />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
