import React, { ChangeEvent } from "react";
import { useState, useEffect, createContext } from "react";
import { Box } from "../components/Box";
import { Button } from "../components/Button";
import { Frequencia } from "../components/Frequencia";
import { Input } from "../components/InputNome/styles";
import service from "../services";
import { Props } from "../types";

export default function Principal() {
    const [ocorrencia, setOcorrencia] = useState({} as Props);
    const [nome, setNome] = useState("arley");
    const [isLoading, setIsLoading] = useState(true);



    useEffect(function () {
        (async function () {
          const ocorrencia: Props = await service.get(nome);
          console.log(ocorrencia);
          setOcorrencia(ocorrencia);
        })();
      }, []);

      const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setNome(nome);

      };

return(
    <>
    <Box>
      <Input onChange={handleInputChange}/>
      <Button/>
      <Frequencia res={ocorrencia.res}/>
    </Box>
    </>

);
}