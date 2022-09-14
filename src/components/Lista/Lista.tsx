import { Button } from "@mui/material";
import { Professor } from "../../@types/professor";
import { Descricao, Foto, Informacoes, ItemLista, ListaStyled, Nome, Valor } from "./Lista.style";

interface ListaProps {
    professores: Professor[],
}

const Lista = (props: ListaProps) => {
    return (
        <ListaStyled>
            {props.professores.map(professor => (
                <ItemLista>
                    <Foto src={professor.foto}></Foto>
                    <Informacoes>
                        <Nome>{professor.nome}</Nome>
                        <Valor>{professor.valor_hora} por hora</Valor>
                        <Descricao>{professor.descricao}</Descricao>
                        <Button sx={{ width: '70%' }}>Marcar Aula com Elton</Button>
                    </Informacoes>
                </ItemLista>
            ))}
        </ListaStyled>
    )
}

export default Lista;