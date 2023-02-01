import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddNew from "./components/AddNew";
import Edit from "./components/Edit";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <div className="bg-dark">
        <h3 className="text-white p-2 font-weight-normal">PhoneBook</h3>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/phone-book/create" element={<AddNew />}></Route>
          <Route path="/phone-book/edit/:id" element={<Edit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
