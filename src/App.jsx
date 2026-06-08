import "./App.css";
import { About } from "./Components/About.jsx";
import { Contact } from "./Components/Contact.jsx";
import { Header } from "./Components/Header.jsx";
import { Landing } from "./Components/Landing.jsx";
import { Projects } from "./Components/Projects.jsx";

function App() {
  return (
    <>
      <Header></Header>
      <Landing></Landing>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </>
  );
}

export default App;
