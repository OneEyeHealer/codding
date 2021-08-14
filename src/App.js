import "./App.css";
import CodeSnippet from "./components/CodeSnippet";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="container main">
        <h1 className="text-center">C++ Code List</h1>
        <CodeSnippet />
      </main>
      <Footer />
    </>
  );
}

export default App;
