import { useState, useEffect } from "react"
import Client from "../core/Client"
import ClienteRepositorio from "../core/ClienteRepositorio"
import ClientCollection from "../firebase/db/ClientCollection"
import useComponentChange from "./useComponentChange"

export default function useClients() {
    
    const repo: ClienteRepositorio = new ClientCollection()

    const { showForm, showTable, setForm, setTable } = useComponentChange()

    const [visivel, setVisivel] = useState<'table' | 'form'>('table')
    const [clientes, setClientes] = useState<Client[]>([])
    const [cliente, setCliente] = useState<Client>(Client.vazio())
  
    useEffect(getList, [])
    
    function getList() {
      repo.getAll().then(clientes => {
        setClientes(clientes)
        showTable()
      })
    }
  
    function selecionarCliente(cliente: Client) {
      setCliente(cliente)
      showForm()
    }
  
    async function deletarCliente(cliente: Client) {
      await repo.delete(cliente)
      getList()
    }
  
    async function salvarCliente(cliente: Client) {
      await repo.save(cliente)
      getList()
    }
  
    function criarCliente() {
      setCliente(Client.vazio())
      showForm()
    }

    return {
        setTable,
        showForm,
        showTable,
        cliente,
        clientes,
        salvarCliente,
        criarCliente,
        deletarCliente,
        selecionarCliente,
        getList
    }
  
}