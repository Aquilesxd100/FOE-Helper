import styled from 'styled-components';
export const NavBarDiv = styled.div`
    display: flex;
`;
export const Corpo = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column
    align-items: center;
    justify-content: center;
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
    border: 6px solid #000000;
    border-radius: 5px;
    text-align: center;
    margin: 0 10px;
    img {
        width: 100%;
        height: 18vw;
        margin: 0;
    }
    h2 {
        font-family: impact;
        font-size: 22px;
        color: black;
    }
`;
export const CardDescricao = styled.div`
    background-color: rgba(221, 221, 221, 0.7);
    padding: 2px;
    margin: -4px 0 0 0;
    border-top: 5px solid #000000;
`;