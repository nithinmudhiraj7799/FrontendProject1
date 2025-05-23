// src/App.jsx
import HeroSection from "./components/HeroSection";
import Overview from "./components/Overview";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <HeroSection />
      <Overview />
      <FeedbackForm />
    </div>
  );
}

export default App;