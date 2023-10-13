import "./App.scss";
import { ChatBot } from "./ChatBot.js";
import { Chatbot as ChatbotFrame } from "./pages/Chatbot/Chatbot";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Modals } from "./components/modals/Modals";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { MyChatbots } from "./pages/MyChatbots/MyChatbots";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <GoogleOAuthProvider clientId="88829588577-fa0e348ml0u09tlbehii74hadkcdus5p.apps.googleusercontent.com">
      <div className="App">
        <Router>
          <Routes>
            <Route path="/chatbot-iframe/id" element={<ChatbotFrame />} />
          </Routes>
        </Router>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
