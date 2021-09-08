import Button from "../components/Button"
import Form from "../components/Form"
import Layout from "../components/Layout"
import Table from "../components/Table"
import useClients from "../hooks/useClients"

export default function Home() {

  const { showTable, setTable,
    cliente , clientes,
    selecionarCliente, deletarCliente,
    salvarCliente, criarCliente } = useClients()

  return (
    <div className={`
    flex h-screen justify-center items-center
    bg-gradient-to-r from-gray-900 to-black
    text-white
    `}>
      <Layout title="Cadastro Simples">
        {setTable ? (
        <>
        <div className="flex justify-end">  
        <Button className="mb-4 bg-gradient-to-b from-green-400 to-green-600"
        onClick={criarCliente}>
          Novo Cliente</Button>
        </div>
        <Table clientes={clientes} 
        clienteSelecionado={selecionarCliente}
        clienteDeletado={deletarCliente}></Table>
        </>
        ) : (
          <Form cliente={cliente}
          clientChange={salvarCliente}
          cancel={() => showTable()}/>
        )}
      </Layout>
    </div>
  )
}
