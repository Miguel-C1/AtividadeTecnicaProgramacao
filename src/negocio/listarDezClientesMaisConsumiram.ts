import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";


export default class ListarDezClientesMaisConsumos {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
        this.entrada = new Entrada
    }

    public listarClientesPorQuantidadeDeProdutos(): Array<{cliente: Cliente, quantidadeTotalConsumida: number}> {
        return this.clientes.map(cliente => {
          const quantidadeTotalConsumida = cliente.getProdutosConsumidos.length
          return { cliente, quantidadeTotalConsumida }
        }).sort((a, b) => b.quantidadeTotalConsumida - a.quantidadeTotalConsumida)
        .slice(0, 10)
      }
      
    
      public listarClientesPorQuantidadeDeServicos(): Array<{cliente: Cliente, quantidadeTotalConsumida: number}> {
        return this.clientes.map(cliente => {
          const quantidadeTotalConsumida = cliente.getServicosConsumidos.length
          return { cliente, quantidadeTotalConsumida }
        }).sort((a, b) => b.quantidadeTotalConsumida - a.quantidadeTotalConsumida)
        .slice(0, 10)
      }
      

}