import { useRef } from "react";
import { Link } from "react-router-dom";
import { Painel, Botoes, Botao, TituloPainel, PainelRodape, Formulario } from "../style";
function Lucro () {
    const inputTotal : any = useRef();
    const inputInvestido : any = useRef();
    const inputLucroBase : any = useRef();
    const inputLucroArco : any = useRef();
    const inputInvasor : any = useRef();
    const resultado : any = useRef();
    window.addEventListener("submit", (event) => {
        event.preventDefault();
        const pfsTotais : number = Number(inputTotal.current.value);
        const pfsInvestidos : number = Number(inputInvestido.current.value);
        const lucroBase : number = Number(inputLucroBase.current.value);
        const lucroArco : number = Number(inputLucroArco.current.value) || 0;
        const invasor : number = Number(inputInvasor.current.value) || 0;
        const investimento : number = Math.round(((pfsTotais - pfsInvestidos) - invasor) * 0.5 + 1 + invasor);
        const lucro : number = Math.round((lucroBase + lucroArco) - investimento);
        if (pfsTotais - pfsInvestidos <= invasor) {
            resultado.current.innerText = `Não é possível ultrapassar o invasor!`;
            resultado.current.style="color: #FF2B2B";
            return;
        }
        if (lucro > 0) {
            resultado.current.innerText = `Investindo ${investimento}, você terá um lucro de ${lucro} pontos forge!`;
            resultado.current.style="color: #00FF00";
        }
        else if (lucro === 0) {
            resultado.current.innerText = `Investindo ${investimento}, você não terá nenhum lucro além das plantas`;
            resultado.current.style="color: #FFFFFF";
        }
        else {
            resultado.current.innerText = `Investindo ${investimento}, você terá um prejuízo de ${Math.abs(lucro)} pontos forge!`;
            resultado.current.style="color: #FF2B2B";
        }
    });

    return(
        <Formulario>
            <TituloPainel><h1>Calculadora de Lucro</h1></TituloPainel>
            <Painel>
                <input type="number" ref={inputTotal} required placeholder="PFs totais do GE"></input>
                <input type="number" ref={inputInvestido} required placeholder="PFs investidos no GE"></input>
                <input type="number" ref={inputLucroBase} required placeholder="Lucro Base"></input>
                <input type="number" ref={inputLucroArco} placeholder="Lucro do Arco"></input>
                <input type="number" ref={inputInvasor} placeholder="Investimento de Invasor"></input>
            </Painel>
            <PainelRodape><p ref={resultado}>Preencha os campos e pressione confirmar para continuar.</p></PainelRodape>
            <Botoes>
                <Botao confirmacao><h3>Confirmar</h3></Botao>
                <Link to="/home">
                    <Botao><h3>Voltar</h3></Botao>
                </Link>
            </Botoes>
        </Formulario>
    );
}
export default Lucro;