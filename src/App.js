
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Tour from "./pages/Tour";

const App=() =>{
 

  return (
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>  
        <Route path="/tour/:id" element={<Tour />}/>
      </Routes>
      </BrowserRouter>
      
    

      
  );
}

export default App;
