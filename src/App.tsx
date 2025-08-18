import { Toaster } from "sonner";
import Footer from "./pages/home/Footer";
import Header from "./pages/home/Header";
import Home from "./pages/home/Home";

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
