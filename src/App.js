import { Routes, Route} from "react-router-dom"
import { AddItem } from "./pages/AddItem";
import {Home} from "./pages/Home"

function App() {
  return (
    <>  
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/add-item' element={<AddItem/>} />
      </Routes>
    </>
  );
}

export default App;
