import Home from "./pages/home";
import Finish from "./pages/finish";

import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter> 
      <Routes>
    
          <Route index element={<Home />} />
          <Route path="finish"  element={<Finish />} />
         
      </Routes>
    </BrowserRouter>
  );
}

export default App;
