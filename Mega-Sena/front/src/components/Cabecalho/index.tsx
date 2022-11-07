import { HTMLAttributes } from "react";
import { WrapperSld, ResultadoSld, ConcursoSld } from "./styles";

type Arley = HTMLAttributes<HTMLElement> & {
    numero: number,
    dataApuracao: string
}

export function Cabecalho({numero, dataApuracao}:Arley){
    console.log(numero, dataApuracao)
    return(
    <WrapperSld>
        <ResultadoSld>Resultado</ResultadoSld>
        <ConcursoSld>Resultado {numero} ({dataApuracao})</ConcursoSld>
    </WrapperSld>
    )
}