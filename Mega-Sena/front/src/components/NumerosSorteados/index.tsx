import { NumeroSorteio, Div } from "./styles";
import { HTMLAttributes } from "react";

type Arley = HTMLAttributes<HTMLElement> & {
    numeroSorteio: string [],
}
export function NumeroSorteado({numeroSorteio}:Arley){

    return(
        <>
            <Div>
                {numeroSorteio.map((numero) => (
                    <NumeroSorteio key={numero}>{numero}</NumeroSorteio>
                ))}  
            </Div>
        </>
    )
}