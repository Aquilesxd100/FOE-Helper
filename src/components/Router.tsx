import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import { Corpo } from "../style";
import Lucro from "../pages/Lucro";
import Home from "../pages/Home";
function Rotas() {
    return (
        <BrowserRouter>
            <Corpo>
                <Header />
                <Routes>
                    <Route path="/lucro" element={<Lucro />}/>
                    <Route path="*" element={<Home />}/>
                </Routes>
            </Corpo>
        </BrowserRouter>
    );
}
export default Rotas;