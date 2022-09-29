
import './App.css';

import Home from './Home/Home';
import {
  BrowserRouter, Routes,
  Route,
} from "react-router-dom";
import ProductDetails from './Components/ProductDetails/ProductDetails';




function App() {



  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/ProductDetails" element={<ProductDetails />} />
         
          
        
      
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
