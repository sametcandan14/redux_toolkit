import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./pages/Counter";
import CrudPage from "./pages/CrudPage";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<CrudPage />} />
          <Route path="counter" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
