import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Main from "./components/Main.jsx";
import "./css/style.css";
function App() {
  return (
    <>
      <div id="body">
        <Navbar />
        <Sidebar />
        <Main />
      </div>
    </>
  );
}

export default App;
