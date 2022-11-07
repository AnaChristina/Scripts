import { ProximoPremio, DataProximoSorteio } from "./styles";
import { HTMLAttributes } from "react";

type Arley = HTMLAttributes<HTMLElement> & {
    dataProximoConcurso: string;
    valorEstimadoProximoConcurso: number;
}
export function ProximoSorteio({dataProximoConcurso, valorEstimadoProximoConcurso}:Arley){

    return(
        <>
            <DataProximoSorteio>Estimativa de prêmio <br/> do próximo concurso <br/>{dataProximoConcurso}</DataProximoSorteio>
            <ProximoPremio>R${ new Intl.NumberFormat('de-DE').format(valorEstimadoProximoConcurso) }</ProximoPremio>
        </>
    )
}