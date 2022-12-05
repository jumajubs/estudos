import { BoxProps } from "../../types";
import { BoxSld } from "./styles";

export const Box = (props: BoxProps) => {
    return (
    <BoxSld>
        <div>{props.children}</div>
    </BoxSld>
    )
  };


    
