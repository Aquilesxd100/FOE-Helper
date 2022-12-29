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
        font-family: friz-quadrata;
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
export const Painel = styled.div`
    height: 40vh;
    width: 70%;
    border: 5px solid;
    background-color: rgba(221, 221, 221, 0.85);
`;
export const Botoes = styled.div`
    display: inline-block;
    text-align: center;
    h3 {
        font-family: friz-quadrata;
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
    min-width: 280px;
    border: solid black 3px;
    border-radius: 5px;
    background-color: ${props => props.confirmacao ? "#00AE00" : "#AE0000"};
    filter: brightness(0.9);
    :hover {
        cursor: pointer;
        filter: brightness(1.2);
    }
`;
