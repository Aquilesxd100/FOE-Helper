import styled from 'styled-components';
export const NavBarDiv = styled.div`
    display: flex;
    justify-content: center;
`;
export const Corpo = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    backdrop-filter: blur(1px);
`
export const HeaderDiv = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 35vw;
        margin: 15px;
    }
`;
export const Card = styled.div`
    position: relative;
    width: 18vw;
    height: auto;
    border: 6px solid #000000;
    border-radius: 5px;
    text-align: center;
    margin: 0 10px;
    filter: brightness(0.8);
    color: #FFFFFF;
    img {
        display: block;
        width: 100%;
        height: 18vw;
        margin: 0;
    }
    h2 {
        font-weight: bold;
        font-size: 22px;
        text-shadow: 2px 0 0 rgb(0, 0, 0), -2px 0 0 rgb(0, 0, 0), 0 2px 0 rgb(0, 0, 0), 0 -2px 0 rgb(0, 0, 0), 1.5px 1.5px rgb(0, 0, 0), -1.5px -1.5px 0 rgb(0, 0, 0), 1.5px -1.5px 0 rgb(0, 0, 0), -1.5px 1.5px 0 rgb(0, 0, 0);
        letter-spacing: 1.5px;
    }
    :hover {
        filter: brightness(1.3);
        cursor: pointer;
        color: #FCD05F;
    }
`;
export const CardDescricao = styled.div`
    background-color: rgba(221, 221, 221, 0.7);
    padding: 2px;
    margin: 0;
    border-top: 5px solid #000000;
`;
export const Formulario = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const TituloPainel = styled.div`
    width: 70%;
    padding: 5px 0;
    background-color: rgb(221, 221, 221);
    text-align: center;
    border-top: 5px solid #000000;
    border-right: 5px solid #000000;
    border-left: 5px solid #000000;
    border-bottom: 4px solid #000000;
    h1 {
        font-size: 26px;
        color: #FEE351;
        text-shadow: 2px 0 0 rgb(0, 0, 0), -2px 0 0 rgb(0, 0, 0), 0 2px 0 rgb(0, 0, 0), 0 -2px 0 rgb(0, 0, 0), 1.5px 1.5px rgb(0, 0, 0), -1.5px -1.5px 0 rgb(0, 0, 0), 1.5px -1.5px 0 rgb(0, 0, 0), -1.5px 1.5px 0 rgb(0, 0, 0);
        letter-spacing: 1.5px;
    }
`;
export const Painel = styled.div`
    width: 70%;
    border-left: 5px solid;
    border-right: 5px solid;
    background-color: rgba(221, 221, 221, 0.85);
    text-align: center;
    padding: 15px;
    input {
        width: 40%;
        text-align: center;
        margin: 6px;
        font-size: 18px;
        padding: 8px;
        border: 2px solid #000000;
        border-radius: 5px;
        background-color: #EEEEEE;
    }
    input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;
export const PainelRodape = styled.div`
    width: 70%;
    background-color: rgb(221, 221, 221);
    border-top: 4px solid #000000;
    border-bottom: 5px solid #000000;
    border-left: 5px solid #000000;
    border-right: 5px solid #000000;
    text-align: center;
    padding: 10px;
    p {
        font-size: 22px;
        color: #FFEA5F;
        font-weight: bolder;
        text-shadow: 1.4px 0 0 rgb(0, 0, 0), -1.4px 0 0 rgb(0, 0, 0), 0 1.4px 0 rgb(0, 0, 0), 0 -1.4px 0 rgb(0, 0, 0), 0.8px 0.8px rgb(0, 0, 0), -0.8px -0.8px 0 rgb(0, 0, 0), 0.8px -0.8px 0 rgb(0, 0, 0), -0.8px 0.8px 0 rgb(0, 0, 0);
        letter-spacing: 1.6px;
    }
`;
export const Botoes = styled.div`
    display: inline-block;
    text-align: center;
    h3 {
        font-weight: bold;
        color: #FFFFFF;
        font-size: 22px;
        text-shadow: 2px 0 0 rgb(0, 0, 0), -2px 0 0 rgb(0, 0, 0), 0 2px 0 rgb(0, 0, 0), 0 -2px 0 rgb(0, 0, 0), 1.5px 1.5px rgb(0, 0, 0), -1.5px -1.5px 0 rgb(0, 0, 0), 1.5px -1.5px 0 rgb(0, 0, 0), -1.5px 1.5px 0 rgb(0, 0, 0);
        letter-spacing: 1.5px;
    }
`;
export const Botao = styled.button<any>`
    margin: 10px 15px;
    padding: 10px 0;
    width: 27vw;
    border: solid black 3px;
    border-radius: 5px;
    background-color: ${props => props.confirmacao ? "#00AE00" : "#AE0000"};
    filter: brightness(0.9);
    :hover {
        cursor: pointer;
        filter: brightness(1.2);
    }
`;
