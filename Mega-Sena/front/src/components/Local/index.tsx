import { HTMLAttributes } from "react";
import { LocalSorteio } from "./styles";

type Arley = HTMLAttributes<HTMLElement> & {
    localSorteio: string,
    nomeMunicipioUFSorteio: string
}

export function Local({localSorteio, nomeMunicipioUFSorteio}:Arley){
    console.log(localSorteio, nomeMunicipioUFSorteio)
    return(
        <LocalSorteio>
            Sorteio realizado no {localSorteio} em {nomeMunicipioUFSorteio}
        </LocalSorteio>
    )
}