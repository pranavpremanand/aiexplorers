import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Services from "./pages/Services/Services";
import WebDevelopment from "./pages/WebDevelopment/WebDevelopment";


function App() {
  return (
    <BrowserRouter>
      <div className="font-gilroy font-medium text-gray text-lg leading-[27px]">
        <Routes>
          {/* <Route
            path="/"
            element={<Navigate to={"/react-templates/edumim"} />}
          />
          <Route path="/react-templates/edumim" element={<HomeOne />} /> */}
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/about-us"
            element={<AboutUs />}
          />
          <Route
            path="/contact-us"
            element={<ContactUs />}
          />
          <Route
            path="/services"
            element={<Services />}
          />
          <Route
            path="/web-development"
            element={<WebDevelopment />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
