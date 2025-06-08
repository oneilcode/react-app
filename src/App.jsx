import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";
import { HomePage } from "./pages/Homepage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
 return (
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
       <Route path='/' element={<HomePage />}/>
       <Route path='/forbidden' element={<div>forbidden</div>}/>
       <Route path='/addquestion' element={<div>question</div>}/>
       <Route path='/question/:id' element={<div>question PAGE</div>}/>

       <Route path='*' element={<NotFoundPage />}/>
      </Route>
    </Routes>
 </BrowserRouter>
 )
}

export default App;
