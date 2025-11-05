import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useState, createContext, useContext } from "react";
import { HelmetProvider } from "react-helmet-async";
import Home from "./imports/Home";
import AboutMe from "./imports/AboutMe";
import EFileMyFormsCaseStudy from "./imports/EFileMyFormsCaseStudy";
import ScrollToTop from "./components/ScrollToTop";
import CustomCursor from "./components/CustomCursor";

// Create a context for custom cursor visibility
export const CustomCursorContext = createContext<{
  setCustomCursorVisible: (visible: boolean) => void;
}>({
  setCustomCursorVisible: () => {},
});

export const useCustomCursor = () => useContext(CustomCursorContext);

export default function App() {
  const [customCursorVisible, setCustomCursorVisible] = useState(true);

  return (
    <HelmetProvider>
 <Router>
      <CustomCursorContext.Provider value={{ setCustomCursorVisible }}>
        <CustomCursor isVisible={customCursorVisible} />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects/efilemyforms" element={<EFileMyFormsCaseStudy />} />
        </Routes>
      </CustomCursorContext.Provider>
    </Router>
    </HelmetProvider>
   
  );
}