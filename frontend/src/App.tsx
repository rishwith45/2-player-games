import "./App.css";
import LoginPage from "./pages/LoginPage";
import { UserProvider } from "./contexts/UserContext";
function App() {
  return (
    <UserProvider>
      <LoginPage></LoginPage>
    </UserProvider>
  );
}

export default App;
