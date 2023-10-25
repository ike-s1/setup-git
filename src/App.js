import "./App.scss";
import { ChatbotItem as ChatbotFrame } from "./pages/ChatbotItem/ChatbotItem";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { Header } from "./components/header/Header";
import { Modals } from "./components/modals/Modals";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { MyChatbots } from "./pages/MyChatbots/MyChatbots";
import { ToastContainer } from "react-toastify";
import { ChatBotControls } from "./pages/ChatbotControls/ChatBotControls";
import { Landing } from "./pages/Landing/Landing";

function App() {
  return (
    <GoogleOAuthProvider clientId="88829588577-fa0e348ml0u09tlbehii74hadkcdus5p.apps.googleusercontent.com">
      <div className="App">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Outlet />
                  <Modals />
                </>
              }
            >
               <Route index element={<Landing/>} />
              <Route path="chatbot/*" element={<ChatBotControls />} />
              <Route path="my-chatbots" element={<MyChatbots />} />
            </Route>
            <Route path="/chatbot-iframe/id" element={<ChatbotFrame />} />
          </Routes>
          <ToastContainer
            position="bottom-left"
            autoClose={3000}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
          />
        </Router>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
