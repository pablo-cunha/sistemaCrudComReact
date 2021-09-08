import Client from '../core/Client'
import { DeleteIcon, EditIcon } from './Icons'

interface TabelaProps {
    clientes: Client[]
    clienteSelecionado?: (cliente: Client) => void
    clienteDeletado?: (cliente: Client) => void
}
export default function Table(props: TabelaProps) {

    const showIcons = props.clienteDeletado || props.clienteSelecionado

    function renderHeader() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
             {showIcons ? <th className="text-left p-4">Ações</th> : false}
            </tr>
        )
    }

    function renderData() {
        return props.clientes?.map((cliente, i) => {
            return (
              <tr key={cliente.id} className={`
                ${i % 2 === 0 ? 'bg-indigo-200' : 'bg-indigo-100'}
              `}>
                  <td className="text-left p-4">{cliente.id}</td>
                  <td className="text-left p-4">{cliente.nome}</td>
                  <td className="text-left p-4">{cliente.idade}</td>
                  {showIcons ? renderIcons(cliente): false}
              </tr>
            )
        })
    }

    function renderIcons(cliente: Client) {
        return (
            <td className="flex justify-center">
                 {props.clienteSelecionado ? (
                <button onClick={() => props.clienteSelecionado?.(cliente)} className={`
                flex justify-center items-center
                text-green-600
                hover:bg-indigo-50 p-2 m-1
                `}>
                    {EditIcon}
                </button>
                 ): false}
                 {props.clienteDeletado ? (
                <button onClick={() => props.clienteDeletado?.(cliente)} className={`
                flex justify-center items-center
                text-red-700
                hover:bg-indigo-50 p-2 m-1
                `}>
                    {DeleteIcon}
                </button>  
                 ) : false}
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
            text-gray-100
            bg-gradient-to-r from-indigo-700 to-indigo-800
            `}>
            {renderHeader()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}