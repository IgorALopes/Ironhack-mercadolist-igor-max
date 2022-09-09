import { Routes, Route } from "react-router-dom";
import { AddItem } from "./pages/AddItem";
import { Home } from "./pages/Home";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-item" element={<AddItem />} />
      </Routes>
    </>
  );
}

export default App;
