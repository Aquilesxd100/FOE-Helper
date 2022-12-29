import { useState } from "react";
import { Link } from "react-router-dom";
import { Painel } from "../style";
import { Botoes } from "../style";
import { Botao } from "../style";
function Lucro () {
    /* const [infos, lucro] = useState([]); */
    return(
        <>
            <Painel>
            
            </Painel>
            <Botoes>
                <Botao confirmacao><h3>Confirmar</h3></Botao>
                <Link to="/home">
                    <Botao><h3>Voltar</h3></Botao>
                </Link>
            </Botoes>
        </>
    );
}
export default Lucro;