import { Toaster } from "sonner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
      <Toaster position="top-right" />
    </>
  );
}

export default App;
