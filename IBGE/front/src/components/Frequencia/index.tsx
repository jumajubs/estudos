import { HTMLAttributes } from "react";
import { FrequenciaSld, Valores } from "./styles";

type Props = HTMLAttributes<HTMLElement> & {
    res: string[]

}

export const Frequencia = ({res}: Props) => {
    return (
    <FrequenciaSld>
        {res?.map((periodo: any) =>(
        <Valores>{res}</Valores>
        ))}
        {res}
    </FrequenciaSld >
    )
  };


    