import { useState } from "react";
import Client from "../core/Client";
import Input from "./Input";
import Button from "./Button"

interface FormProps {
    cliente: Client
    cancel?: () => void
    clientChange?: (cliente: Client) => void

}
export default function Form(props: FormProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
    return ( 
        <div>
            {id ? (
                <Input readOnly text="ID" value={id} />
            ): false}
            <Input text="Nome" 
            value={nome}
            onChange={setNome}
            />
            <Input text="Idade"
             type="number" 
             value={idade}
             onChange={setIdade}
             />
             <div className="flex justify-end mt-3">
                <Button className="bg-gradient-to-b from-blue-600 to-blue-800 mr-2"
                onClick={() => props.clientChange?.(new Client(nome, idade, id))}>
                {id ? 'Alterar' : 'Salvar' }
                </Button>
                <Button className="bg-gradient-to-b from-red-600 to-red-700"
                onClick={props.cancel}>
                    Cancelar
                </Button>
             </div>
        </div>
    )
}