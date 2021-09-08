import Client from "./Client";

export default interface ClienteRepositorio {
    save(cliente: Client): Promise<Client>
    delete(cliente: Client): Promise<void>
    getAll(): Promise<Client[]>
}