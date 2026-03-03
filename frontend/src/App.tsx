import { BrowserRouter, Route, Routes } from "react-router-dom";
import DepotPage from "./pages/DepotPage";
import Home from "./pages/Home";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/soumettre" element={<DepotPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
