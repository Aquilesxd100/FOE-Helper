import { Card, CardDescricao } from "../style";
interface propriedades {
    titulo: string,
    img: string
}
function NavCard (infos: propriedades) {
    let tituloFiltrado : object = <h2>{infos.titulo}</h2>;
    const posicaoSPC : number = infos.titulo.search(" ");
    if (posicaoSPC >= 11) {
        tituloFiltrado = <h2>{infos.titulo.substring(0, posicaoSPC)}<br/>{infos.titulo.substring(posicaoSPC , infos.titulo.length)}</h2>;
    }
    return (
        <Card>
            <img src={infos.img}/>
            <CardDescricao<any>>
                {tituloFiltrado}
            </CardDescricao>
        </Card>
    );
}
export default NavCard;