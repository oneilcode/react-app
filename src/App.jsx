import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";
import { HomePage } from "./pages/Homepage";

function App() {
 return (
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
       <Route path='/' element={<HomePage />}/>
       <Route path='/forbidden' element={<div>forbidden</div>}/>
       <Route path='/addquestion' element={<div>question</div>}/>
      </Route>
    </Routes>
 </BrowserRouter>
 )
}

export default App;
