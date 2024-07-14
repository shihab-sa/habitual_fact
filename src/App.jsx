import Footer from "./components/Footer";
import MyHeroSection from "./components/MyHeroSection";
import Navbar from "./components/Navbar";
import ToolSection from "./components/ToolSection";
import "./App.css";

export default function App() {
  return (
    <div className="ml-20 mr-20">
      <Navbar />
      <MyHeroSection />
      <ToolSection />
      <Footer />
    </div>
  );
}
