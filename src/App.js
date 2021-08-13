import "./App.css";
import CodeSnippet from "./components/CodeSnippet";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container codding-bg">
        <h1 className="text-center">C++ Code List</h1>
        <CodeSnippet />
      </div>
    </>
  );
}

export default App;
